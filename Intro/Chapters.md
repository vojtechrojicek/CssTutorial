# Intro
## Co je to HTML, css, DOM ?
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
* Data o datech
* V html se na ne používá tag `<meta />`
* Musí být v hlavičce (`<head><meta charset="utf-8"></head>`)
* Typické meta-tagy:
```html
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
<meta http-equiv="content-language" content="en" />
<meta http-equiv="refresh" content="900" />

HTML5 lze definovat encoding - <meta charset="utf-8">
```

### HTML cheatsheet
https://1drv.ms/b/s!AntfQL3PCtMjgap4Mr1WzpyeYHk_Nw

### CSS cheatsheet
https://1drv.ms/b/s!AntfQL3PCtMjgap8tHqtyJbYTNVq2Q

### Css validator
http://jigsaw.w3.org/css-validator/