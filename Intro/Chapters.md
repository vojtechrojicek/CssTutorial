# Intro
## Co je to HTML, CSS, DOM ?
* HTML = **H**yper**t**ext **M**arkdown **L**anguage 
    * Značkovací jazyk na tvorbu *statických* webových stránek. 
    * První standard (HTML 2.0 - 1995) aktuálně - HTML5 (2014)
    * Validace: https://validator.w3.org

Html dokument se skládá z:
* Elementy
    * Vše co se nachází mezi úvodním a závěrečným **tagem**.
    * Jsou vnořené (nested).
* Tagy 
    * *<název_tagu>*
    * Může obsahovat attributy: *<název_tagu **attribute="..."**>*
    * Používají se v páru: *<název_tagu></název_tagu>*
        >Existuje jen pár nepárových tagů (`<img />, <br /> ,<input />,<html>` ... ) 
* Attributy
    * Přidávájí detaily do elementu
    * Např:
        ```html
         <img src='cat.jpg' alt='Černá kočka.' />
        ```
* Entity
    * Speciální značky (např: &) se nadají zapsat do HTML stránky pokud nepoužijete syntax entity: *&[entity];*
    ```html
    &copy; -> ©
    &amp; -> & 
    &auml; -> ä
    ```

### Plně validní HTML stránka:
```html
<!DOCTYPE html> 
<html>    
<head>       
    <title>Title goes here...</title>    
</head>    
<body>    
</body> 
</html>
```

### Metadata
* Data o datech (Kódování, jazyk, ...)
* V html se na ne používá tag `<meta />`
* Musí být v hlavičce (`<head><meta charset="utf-8"></head>`)
* Typické meta-tagy:
```html
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
<meta http-equiv="content-language" content="en" />
<meta http-equiv="refresh" content="900" />

HTML5 lze definovat encoding - <meta charset="utf-8">
```

### **D**ocument **O**bject **M**odel
* API pomocí kterého můžeme přistupovat k jednotlivým objektum HTML stránky. (Elemnty, tagy, attributy, ...)
* Pomocí JavaScriptu můžeme na konkrétní místo přidat nebo odebrat jakýkoliv obsah.
* K dokumentu zde přistupujeme jako ke stromu. Každý element je nodem.
![Image of css](https://raw.githubusercontent.com/vojtechrojicek/CssTutorial/master/Intro/Assets/DOM-model.png)


### HTML cheatsheet
https://github.com/vojtechrojicek/CssTutorial/blob/master/Intro/Assets/html5-che

# **C**ascading **S**tyle **S**heets
* Používá se na designování webu
* CSS3 (2005) - zaoblené rohy, stíny, animace, ...
``` css
body {
    font-size: 14px;
    color: navy;
}
```
* V CSS píšeme seznam pravidel, která jsou potom uplatněna na HTML dokument.
* Jak to funguje:
![Image of css](https://raw.githubusercontent.com/vojtechrojicek/CssTutorial/master/Intro/Assets/css.png)

### Aplikace CSS v HTML
1. Inline\
    CSS se vlkádá přímo do HTML pomocí *style* atributu.
    ``` html
    <p style="color: red">text</p>
    ```
    Není to ovšem "best-practise". Lepší je držet design oddělený od HTML. (Pokud k tomu není konkrétní důvod.)
2. Internal\
    CSS je vloženo pro celou stránku uvnitř `<head>` tagu.
    ``` html
    <!DOCTYPE html>
    <html>
    <head>
        <title>CSS Example</title>
        <style>
            p {
                color: red;
            }
            a {
                color: blue;
            }
        </style>
    ...
    ```
2. External\
    CSS je uloženo do samostatného .css souboru a ten je nalinkovaný v hlavičce stránky.

    *style.css* :
    ``` css
    p {
        color: red;
    }
    a {
        color: blue;
    }
    ```
    *index.html* :
    ``` html
    <!DOCTYPE html>
    <html>
    <head>
        <title>CSS Example</title>
        <link rel="stylesheet" href="style.css">
    ...
    ```

### Selectory, properties, values
* Selector\
    Tam kde HTML má tagy CSS má selektory.
    Tzn. pomocí selektoru určujeme, který HTML element bude ovlivněný
* Properties\
    Lidsky čitelný identifikátor vlastnosti, kterou nastavujeme (font, width,...).
* Value\
    Konkrétní hodnota na kterou chceme property nastavit.

``` css
selector {
    property: value;
    ...
} 
```
``` css
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}
```
### CSS cheatsheet
https://github.com/vojtechrojicek/CssTutorial/blob/master/Intro/Assets/css-cheat-sheet-v2.pdf


### Třídy (class), Identifikátory (ID)
* Vlastní **selectory**, které si můžeme definovat.
* Je to super, pokud máme stejný design pro více HTML prvků.
* ID - Může být jen **jeden** element na celé stránce se stejným ID. Začíná "*#*"
* Class - Na stránce může být libovolný počet elementů. Začíná "*.*"

*CSS soubor může vypadat např* :
```css
#top {
    background-color: #ccc;
    padding: 20px
}

.intro {
    color: red;
    font-weight: bold;
}
```
*HTML* :
```html
<div id="top">
    <h1>About dogs</h1>
    <p class="intro">Dogs are the best.</p>
    <p class="intro">Or maybe not?</p>
</div>
```
### Složená deklarace (grouping) a kontextová deklarace (nesting)
* Grouping\
    Použitím "*,*" můžete jednoduše přiřadit stejnou property více elementům.
    ```css
    h2 {
        color: red;
    }
    .class1 {
        color: red;
    }
    .class2 {
        color: red;
    }
    ```
    ```css
    h2, .class1, .class2 {
        color: red;
    }
    ```
* Nesting\
    Slouží k vyselektování elementu uvnitř jiného elementu.
    ```css
    #top {
        background-color: #ccc;
        padding: 1em
    }
    #top h1 {
        color: red;
    }
    #top p {
        color: blue;
        font-weight: bold;
    }
    ```
    ```html
    <div id="top">
        <h1>This header will be red.</h1>
        <p>This paragraph will be blue.</p>
        <p>This one will be blue too.</p>
    </div>
    <h1>Without syle</h1>
    ```

### Který selector se použije na element?
```html
<div>
    <p>Some text.</p>
</div>
```
* Pokud jsou selectory **stejné**, použije se **poslední**:
    ```css
    p { color: red }
    p { color: blue } /*paragraph bude modrý*/
    ```
* Pokud selectory **nejsou stejné**, použije se ten, který **přesnejí určuje element**:
    ```css
    div p { color: red } /*paragraph bude červeny*/
    p { color: blue }
    ```
    Na výpočet priority, který určuje zdali se použije daný styl, existují pravidla:
    * *p* -  má prioritu **1** (1 HTML selector)
    * *div p* - má prioritu **2** (2 HTML selectory, 1+1)
    * *.tree* - má prioritu **10** (1 class selector)
    * *div p.tree* - má prioritu **12** (2 HTML selectory + class selector, 1+1+10)
    * *#top* - má prioritu **100** (1 id selector)
    * *body #content .alternative p* - má prioritu **112** (HTML selector + id selector + class selector + HTML selector, 1+100+10+1)

### Important
Když chci, aby nějaká deklarace převládla, dá se použít klíčové slovo "*!important*". Taková deklarace potom nebude přepsána žádnou pozdější.
``` css
h1 {
  color: blue !important;
  background-color: yellow !important;
  border: 1px solid black !important;
}
```

### CSS a debugování
Pokud je deklarace nevalidní (chyba v syntaxi, browser nepodporuje dané CSS,...), browser dané CSS prostě ignoruje. Nevalidní selector, nevybere žádný element a také neaplikuje svoje property.

Na debugování se používá, inspector DOMu a CSS, který mají všechny moderní browsery.
(**F12** v Chrome)

* Css validator: http://jigsaw.w3.org/css-validator/