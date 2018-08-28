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
Každý HTML element je v podstatě obdelníkový "box", kterému môžeme nastavovat vlstnosti pomocí CSS.
Skládá se s vlastností: `display, position, float, margin, padding`.

![Image of box-model](https://raw.githubusercontent.com/vojtechrojicek/CssTutorial/master/Beginners/Assets/box-model.png)


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
    * *overline * - čára nad textem
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