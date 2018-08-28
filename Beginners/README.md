# Beginners
## Model - box
## Blokové a inline elementy
## Barvy
V CSS existuje 16 777 216 barev, které můžeme použít. Definovat je lze vícero způsoby:
* Jménem
    ```css
    .content {
        color: red;
        background-color: blue;
    }
    ```
* RGB

    Kdy udáváme množství červené, zelené a modré buďto číslem v rozsahu 0-255 nebo %.
    ```css
    .content {
        color: rgb(255,0,0);
        background-color: rgb(0%,0%,100%);
    }
    ```
* RGBA

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