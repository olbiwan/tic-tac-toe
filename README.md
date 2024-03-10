<img align="right" width="20%" src="tic-tac-toe.png">

[![Latest release](https://img.shields.io/github/v/release/olbiwan/tic-tac-toe?label=Latest%20release&style=social)](https://github.com/olbiwan/tic-tac-toe/releases)

[![Eclipse IDE](https://img.shields.io/badge/Eclipse%20IDE-blue?logo=eclipseide)](https://eclipseide.org)
[![IntelliJ IDEA](https://img.shields.io/badge/IntelliJ%20IDEA-black?logo=intellijidea)](https://www.jetbrains.com/idea)

[![Java](https://github.com/olbiwan/tic-tac-toe/actions/workflows/build-java.yml/badge.svg?branch=main)](https://github.com/olbiwan/tic-tac-toe/actions/workflows/build-java.yml)
[![Kotlin](https://github.com/olbiwan/tic-tac-toe/actions/workflows/build-kotlin.yml/badge.svg?branch=main)](https://github.com/olbiwan/tic-tac-toe/actions/workflows/build-kotlin.yml)
[![Node.js](https://github.com/olbiwan/tic-tac-toe/actions/workflows/build-nodejs.yml/badge.svg?branch=main)](https://github.com/olbiwan/tic-tac-toe/actions/workflows/build-nodejs.yml)
[![Python](https://github.com/olbiwan/tic-tac-toe/actions/workflows/build-python.yml/badge.svg?branch=main)](https://github.com/olbiwan/tic-tac-toe/actions/workflows/build-python.yml)

# [Tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe)

_It is the classic game of **Tic-tac-toe** built on the **command line**, represented in **several programming languages**. **The challenge is to build the most optimizeable code possible in a single class.**_

```bash
Player 'X' it's your turn, enter your position (row): 1
Player 'X' it's your turn, enter your position (column): 1
 X |   |
   |   |
   |   |
Player 'O' it's your turn, enter your position (row): 2
Player 'O' it's your turn, enter your position (column): 2
 X |   |
   | O |
   |   |
Player 'X' it's your turn, enter your position (row): 1
Player 'X' it's your turn, enter your position (column): 2
 X | X |
   | O |
   |   |
Player 'O' it's your turn, enter your position (row): 3
Player 'O' it's your turn, enter your position (column): 3
 X | X |
   | O |
   |   | O
Player 'X' it's your turn, enter your position (row): 1
Player 'X' it's your turn, enter your position (column): 3
 X | X | X
   | O |
   |   | O
Player X won!!!
```

## ⚡️Run the project
Below are instructions for running the project in different programming languages.  

<details open><summary><b>Build and run <a href="https://en.wikipedia.org/wiki/Tic-tac-toe">Tic-tac-toe</a> in <a href="https://en.wikipedia.org/wiki/Java_(programming_language)">Java</a>/<a href="https://en.wikipedia.org/wiki/Kotlin_(programming_language)">Kotlin</a>:</b><br><br></summary>
 
1. **Install [JDK 21](https://www.oracle.com/java/technologies/downloads)**.  
   _To validate the installation, open the command line and type: `java --version`._
2. **Configure Maven** [(if you need help click here)](https://maven.apache.org/install.html).  
  _To validate the configuration, open the command line and type: `mvn --v`._
3. **Package the project** by opening the command line and typing `mvn install` inside folder `tic-tac-toe/java` or `tic-tac-toe/kotlin`.  
   _To validate check if the `target` folder was created with the file `tictactoe.jar` inside._
6. _Finally_ **run the [Tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe)**, open the command line and type `java -jar target/tictactoe.jar`.

**Dependencies:**
1. _[**Apache Commons Lang**](https://commons.apache.org/proper/commons-lang): Utility library._
3. _[**JUnit 5**](https://junit.org/junit5): Unit testing framework._
4. _[**Mockito**](https://site.mockito.org): Unit testing framework._
5. _[**Project Lombok**](https://projectlombok.org) (only Java): Library that automatically connects to your editor and creates tools to "spice up" Java._

</details>

<details open><summary><b>Build and run <a href="https://en.wikipedia.org/wiki/Tic-tac-toe">Tic-tac-toe</a> in <a href="https://en.wikipedia.org/wiki/Node.js">Node.js</a>:</b><br><br></summary>

1. **Install [Node.js 20.11.1](https://nodejs.org/en)**.  
   _To validate the installation, open the command line and type: `node -v`._
3. **Download external dependencies** by opening the command line and typing `npm install` inside folder `tic-tac-toe/nodejs`.  
   _To validate, check if the `node_modules` folder was created._
6. _Finally_ **run the [Tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe)**, open the command line and type `npm start`.

**Dependencies:**
1. _[**Jest**](https://jestjs.io): Unit testing framework._

</details>

<details open><summary><b>Build and run <a href="https://en.wikipedia.org/wiki/Tic-tac-toe">Tic-tac-toe</a> in <a href="https://en.wikipedia.org/wiki/Python_(programming_language)">Python</a>:</b><br><br></summary>

1. **Install [Python 3.8.5](https://www.python.org/downloads)**.  
   _To validate the installation, open the command line and type: `py --version`._
2. **Install pip** [(if you need help click here)](https://pip.pypa.io/en/stable/installation).  
  _To validate the configuration, open the command line and type: `pip --version`._
4. **Download external dependencies** by opening the command line and typing `pip install pytest python-utils` inside folder `tic-tac-toe/python`.  
   _To validate, open the command line and type: `pip show pytest` and `pip show python-utils`._
6. _Finally_ **run the [Tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe)**, open the command line and type `py tictactoe/tictactoe_python.py`.

**Dependencies:**
1. _[**pytest**](https://docs.pytest.org): Unit testing framework._
2. _[**python-utils**](https://pypi.org/project/python-utils): Utility library._

</details>

## 👨‍🎓 A little about the architecture

```mermaid
sequenceDiagram
    autonumber
    loop Game
        activate Player
          loop play()
              Game-->>+Player: "Player", what's your move?
          end
          Note left of Player: Wait for a valid move.
          Player->>+Game: move
        deactivate Player
        alt Shows the board and checks the end of the game.
          Game->>Game: drawBoard()
          Note right of Game: Draw board in line command.
          Game->>Game: checkEndGame(player)
          Note right of Game: Wait for a winner or sold out moves.
        end
    end
```

<table align="center">
    <thead>
        <tr>
            <th rowspan=2>Language</th>
            <th rowspan=2>Build</th>
            <th colspan=2>Complexity</th>
            <th rowspan=2>Coverage</th>
            <th rowspan=2>Lines of Code</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan><a href="https://en.wikipedia.org/wiki/Java_(programming_language)">Java</a></td>
            <td rowspan>
                <a href="https://maven.apache.org">
                    <img src="https://img.shields.io/badge/build-Maven-blue?logo=apachemaven" alt="Maven">
                </a>
            </td>
            <td rowspan>
                <a href="https://sonarcloud.io/component_measures?metric=cognitive_complexity&id=tictactoe-java">
                    <img src="https://img.shields.io/badge/cognitive-12-green?logo=sonarcloud" alt="Cognitive Complexity">
                </a>
            </td>
            <td rowspan>
                <a href="https://sonarcloud.io/component_measures?metric=complexity&id=tictactoe-java">
                    <img src="https://img.shields.io/badge/cyclomatic-26-green?logo=sonarcloud" alt="Cyclomatic Complexity">
                </a>
            </td>
            <td rowspan>
                <a href="https://sonarcloud.io/component_measures?metric=coverage&id=tictactoe-java">
                    <img src="https://sonarcloud.io/api/project_badges/measure?project=tictactoe-java&metric=coverage" alt="Coverage">
                </a>
            </td>
            <td rowspan>
                <a href="https://sonarcloud.io/component_measures?metric=ncloc&id=tictactoe-java">
                    <img src="https://sonarcloud.io/api/project_badges/measure?project=tictactoe-java&metric=ncloc" alt="Lines of Code">
                </a>
            </td>
        </tr>
        <tr>
            <td><a href="https://en.wikipedia.org/wiki/Kotlin_(programming_language)">Kotlin</a></td>
            <td>
                <a href="https://maven.apache.org">
                   <img src="https://img.shields.io/badge/build-Maven-blue?logo=apachemaven" alt="Maven">
                </a>
            </td>
            <td>
                <a href="https://sonarcloud.io/component_measures?metric=cognitive_complexity&id=tictactoe-kotlin">
                   <img src="https://img.shields.io/badge/cognitive-15-green?logo=sonarcloud" alt="Cognitive Complexity">
                </a>
            </td>
            <td>
                <a href="https://sonarcloud.io/component_measures?metric=complexity&id=tictactoe-kotlin">
                   <img src="https://img.shields.io/badge/cyclomatic-19-green?logo=sonarcloud" alt="Cyclomatic Complexity">
                </a>
            </td>
            <td>
                <a href="https://sonarcloud.io/component_measures?metric=coverage&id=tictactoe-kotlin">
                   <img src="https://sonarcloud.io/api/project_badges/measure?project=tictactoe-kotlin&metric=coverage" alt="Coverage">
                </a>
            </td>
            <td>
                <a href="https://sonarcloud.io/component_measures?metric=ncloc&id=tictactoe-kotlin">
                   <img src="https://sonarcloud.io/api/project_badges/measure?project=tictactoe-kotlin&metric=ncloc" alt="Lines of Code">
                </a>
            </td>
        </tr>
        <tr>
            <td><a href="https://en.wikipedia.org/wiki/Node.js">Node.js</a></td>
            <td>
                <a href="https://www.npmjs.com">
                    <img src="https://img.shields.io/badge/build-NPM-blue?logo=npm" alt="NPM">
                </a>
            </td>
            <td>
                <a href="https://sonarcloud.io/component_measures?metric=cognitive_complexity&id=tictactoe-nodejs">
                    <img src="https://img.shields.io/badge/cognitive-17-green?logo=sonarcloud" alt="Cognitive Complexity">
                </a>
            </td>
            <td>
                <a href="https://sonarcloud.io/component_measures?metric=complexity&id=tictactoe-nodejs">
                    <img src="https://img.shields.io/badge/cyclomatic-55-green?logo=sonarcloud" alt="Cyclomatic Complexity">
                </a>
            </td>
            <td>
                <a href="https://sonarcloud.io/component_measures?metric=coverage&id=tictactoe-nodejs">
                    <img src="https://sonarcloud.io/api/project_badges/measure?project=tictactoe-nodejs&metric=coverage" alt="Coverage">
                </a>
            </td>
            <td>
                <a href="https://sonarcloud.io/component_measures?metric=ncloc&id=tictactoe-nodejs">
                    <img src="https://sonarcloud.io/api/project_badges/measure?project=tictactoe-nodejs&metric=ncloc" alt="Lines of Code"></td>
                </a>
        </tr>
        <tr>
            <td><a href="https://en.wikipedia.org/wiki/Python_(programming_language)">Python</a></td>
             <td>
                <a href="https://pypi.org/project/pip">
                    <img src="https://img.shields.io/badge/build-pip-blue?logo=pip" alt="pip">
                </a>
            </td>
            <td>
                <a href="https://sonarcloud.io/component_measures?metric=cognitive_complexity&id=tictactoe-python">
                    <img src="https://img.shields.io/badge/cognitive-29-green?logo=sonarcloud" alt="Cognitive Complexity">
                </a>
            </td>
            <td>
                <a href="https://sonarcloud.io/component_measures?metric=complexity&id=tictactoe-python">
                    <img src="https://img.shields.io/badge/cyclomatic-35-green?logo=sonarcloud" alt="Cyclomatic Complexity">
                </a>
            </td>
            <td>
                <a href="https://sonarcloud.io/component_measures?metric=coverage&id=tictactoe-python">
                    <img src="https://sonarcloud.io/api/project_badges/measure?project=tictactoe-python&metric=coverage" alt="Coverage">
                </a>
            </td>
            <td>
                <a href="https://sonarcloud.io/component_measures?metric=ncloc&id=tictactoe-python">
                    <img src="https://sonarcloud.io/api/project_badges/measure?project=tictactoe-python&metric=ncloc" alt="Lines of Code">
                </a>
            </td>
        </tr>
    </tbody>
</table>

---

_Follow new version by **[releases](https://github.com/olbiwan/Tic-tac-toe/releases)**._