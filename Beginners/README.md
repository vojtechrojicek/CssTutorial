# Beginners
## Blokové a inline elementy
V HTML existují dva zakladní typy elementů:
* Blokové\
    CSS: `display: block`\
    Zabírají celý řádek.\
    `<h1>, <p>, <ul>,<table>`, ...
* Inline\
    CSS: `display: inline`\
    Obvykle nezačínají nový řádek.\
    `<td>, <a>, <img>`, ...

![Image of block-inline](https://raw.githubusercontent.com/vojtechrojicek/CssTutorial/master/Beginners/Assets/block-inline.png)

### `<div>` element
Nejpouživanější tag v HTML. Je to **blokový** element, který se používá na uspořádání stránky. 
### `<span>` element
Další užitečný element, který je na rozdíl od `div` **inline**. Dá se dat např okolo slova v textu a nastavit mu nějakou vlastnost přes CSS (barva, tučnost, ...).

## Box Model
Každý HTML element je v podstatě obdelníkový "box", kterému môžeme nastavovat vlastnosti pomocí CSS. 

![Image of box-model](https://raw.githubusercontent.com/vojtechrojicek/CssTutorial/master/Beginners/Assets/box-model.png)

* **width** a **height**\
    Šířka a výška obsahu - ten může obsahovat text nebo další vnořené elementy.\
    Lze nastavit také obecnější `min-width, max-width, min-height, max-height`
* **padding**\
    Vnitřní prostor mezi okrajem(border) a obsahem(content) elementu.
    ```css
    padding: 5px 1px 5px 1px;
    ```
    ```css
    padding: 5px 1px;
    ```
    ```css
    padding-top: 5px;
    padding-right: 1px;
    padding-bottom: 5px;
    padding-left: 1px;
    ```
* **border**\
    Okraj je default nastavený na 0. Což lze pomocí css změnit několika způsoby
    * `border: 1px solid black` - nastaví všechny běžné vlastnosti celému okraji
    * `border-top, border-right, border-bottom, border-left` - šířka jednotlivých hran
    * `border-width, border-style, border-color`- styly hran
    * `border-top-width, border-top-style, border-top-color` - lze nastavit pro každou hranu zvlášť
* **margin**\
    Vnější prostor mezi okrajem(border) a jiným elementem.\
    Pokud jsou vedle sebe 2 elementy s marginem - použije se větší hodnota s obou.
    ```css
    margin: 5px 1px 5px 1px;
    ```
    ```css
    margin: 5px 1px;
    ```
    ```css
    margin-top: 5px;
    margin-right: 1px;
    margin-bottom: 5px;
    margin-left: 1px;
    ```

## CSS - pozicování
Existují dva naprosto odlišné druhy pozicování.
* Absolutní\
    Umístí objekt do stránky na udané souřadnice bez ohledu na okolní text.
* Relativní\
    Určuje pouze, o kolik se má objekt posunout oproti své normální poloze.
```css
position:(absolute|relative); 
[top: velikost]; 
[left: velikost]; 
...
[z-index: číslo];
```
*Position má i další hodnoty: fixed, static,... Nejsou ovšem tak použivané.*
### Z-index
Protože při přesouvání objektů může dojít k překryvu, existuje vlastnost určující, který objekt bude navrchu. Default `z-index: 0;`. Čím vyšší číslo, tím více nahoře element bude.

### Overflow - přetečení
Aby bylo co "přetékat", HTML objekt (nejlépe asi `<div>`) musí mít stylem nastavenou výšku, šířku nebo oboje.
* text, který se nevejde, prostě oříznout, skrýt (`overflow: hidden`)
* nechat kolem elementu zobrazit scroll-bar (`overflow: scroll`)
* scroll-bar zapnout, jen když je to potřeba (`overflow: auto`)
* nebránit tomu a nechat to přetékat (bez hodnoty nebo `overflow: visible`)

## Selectory
* Jednoduché selectory\
    Přímo ukauji na element nebo skupinu elementu pomocí tagu, classy nebo id
    ```css
    p {
        color: red;
    }
    #header {
        color: blue;
    }
    ```
* Attributové selektory\
    Vybírají element na základě jeho attributu. Název atributu se píše do `[]`.
    * `[attr]` - Vybere element s daným attributem ať je jeho hodnota jakákoliv
    * `[attr=val]` - Vybere element, pokud se jeho hodnota rovná "val".
    * `[attr~=val]` - Vybere element, pokud jeho hodnota obsahuje i "val".
    ```html
    <ul>
        <li data-quantity="1kg" data-vegetable>Tomatoes</li>
        <li data-quantity="optional 10ml" data-vegetable="liquid">Olive oil</li>
        <li data-quantity="700g" data-vegetable="not spicy like chili">Red pepper</li>
    </ul>
    ```
    ```css
    [data-vegetable] {
        color: green;
    }
    [data-vegetable="liquid"] {
        background-color: goldenrod;
    }
    [data-vegetable~="spicy"] {
        color: red;
    }
    ```
* Pseudo-classy\
    V CSS jsou pseudo-classy speciální slovíčka, která se píší `selector:pseudo-class`. Daný styl se vykoná jedině když je pseudo-classa aktivní. Existuje asi 40 pseudo-class, např:
    * active
    * checked
    * enabled / disabled
    * hover - pokud uživatel najede na element myškou
    * ...: https://www.w3schools.com/css/css_pseudo_classes.asp
    ```css
    a {
        color: blue;
        font-weight: bold;
    }
    a:visited {
        color: blue;
    }
    a:hover,
    a:active,
    a:focus {
        color: darkred;
        text-decoration: none;
    }
    ```
* Kombinace a spojování selectorů\
    Používat jenom 1 selector, se časem stane nepraktické a je lepší je spojovat.
    * `A, B` - Element který obsahuje A a/nebo B selector.
        ```css
        html, body {
            color: black;
        }
        ```
    * `A B` - Element, kdy B je potomek A (kterýkoliv)
        ```html
        <div>
            <p>
                <span>Červený text</span>
            </p>
        </div>
        ```
        ```css
        div span {
            color: red;
        }
        ```
    * `A > B`- Element, kdy B je *přímý* potomek A
    * `A + B` - Element, kdy B je *následující* sourozenec A (B je následující dítě stejného otce jako A).
    * `A ~ B` - Element, kdy B je jakýkoliv sourozenec A.

## Barvy
V CSS existuje 16 777 216 barev, které můžeme použít. Definovat je lze vícero způsoby:
* Jménem
    ```css
    .content {
        color: red;
        background-color: blue;
    }
    ```
* RGB\
    Kdy udáváme množství červené, zelené a modré buďto číslem v rozsahu 0-255 nebo %.
    ```css
    .content {
        color: rgb(255,0,0);
        background-color: rgb(0%,0%,100%);
    }
    ```
* RGBA\
    Dané RGB barvě se dá také nastavit čtvrý parametr - průhlednost 0-1. 0 = průhledná.
    ```css
    .content {
        color: rgba(0,0,0, 0.3);
        background-color: rgba(0,0,255, 0.3);
    }
    ```
* Hexadecimal
    ```css
    .content {
        background-color: #f5f2f0;
    }
    ```
    ![Image of hex](https://raw.githubusercontent.com/vojtechrojicek/CssTutorial/master/Beginners/Assets/hex.png)

## Text
### Písmo
* **font-family**\
    Nastaví textu font. (Times New Roman, Arial, Verdana, ...)   
    Pokud nastavíme více hodnot, použije se první font, který browser najde v PC uživatele
    ```css
    body {
        font-family: arial, helvetica, serif;
    }
    ```
* **font-size**\
    Velikost písma. Lze použít více jednotek: px, pt, %,..

### Tučnost, kurzíva, ...
* **font-weight**\
    Určuje zdali je text tučně nebo ne.\
    Hodnoty: normal, bold, 100,200,300,...,900

* **font-style**\
    Určuje zdali je text kurzivou nebo ne.

* **text-decoration**\
    Nakreslí tenkou čáru nad, pod nebo přes text.
    * *underline* - podtrhne text
    * *overline* - čára nad textem
    * *line-through* - čára přes text

* **text-transform**\
    Nastavuje velikostí písmen.
    * *capitalize* - První pismenko slova velkým
    * *uppercase* - Vše velkým
    * *lowercase* - Vše malým

![Image of fonts](https://raw.githubusercontent.com/vojtechrojicek/CssTutorial/master/Beginners/Assets/fonts.png)

### Rozložení textu
* **text-align**\
    Zarovnání textu\
    Hodnoty: left, right, center a justify (do bloku)

* **line-height**\
    Nastavuje výšku řádku.

* **letter-spacing**\
    Mezery mezi písmeny
* **word-spacing**\
    Mezery mezi slovy

![Image of text-spacing](https://raw.githubusercontent.com/vojtechrojicek/CssTutorial/master/Beginners/Assets/text-spacing.png)