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
- [] Add Image with DOM

### HTML cheatsheet
- [ ] Add gitHub link to this: https://1drv.ms/b/s!AntfQL3PCtMjgap4Mr1WzpyeYHk_Nw

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
[] Add Image with CSS
* Css validator: http://jigsaw.w3.org/css-validator/

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
    CSS je uloženo do samostatného .css souboru a ten je nalinkovaný v hlavičce stránky.\
    *style.css*:
    ``` css
    p {
        color: red;
    }
    a {
        color: blue;
    }
    ```
    index.html:
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
    Konkrétní hodnota na, kterou chceme property nastavit.

``` css
selector {
    property: value;
    ...
} 
```
``` css
h1 {
  colour: blue;
  background-color: yellow;
  border: 1px solid black;
}
```
### CSS cheatsheet
https://1drv.ms/b/s!AntfQL3PCtMjgap8tHqtyJbYTNVq2Q

### Classy, ID, 

### Important

``` css
h1 {
  colour: blue !important;
  background-color: yellow !important;
  border: 1px solid black !important;
}
```
