# Saiph: WordPress Theme Builder

Saiph is a powerful, three-part application designed to streamline the creation of custom WordPress themes. It allows you to visually configure your website, utilize a rich component library, and then effortlessly generate your theme using a command-line interface.

---

## How it Works

Saiph simplifies the WordPress theme development process into a few intuitive steps:

1.  **Configure your website in the Saiph App:** This is where you'll visually design and set up the structure and content of your website. The app will output a JSON configuration file.

2.  **Transfer the configuration to Saiph CLI:** Copy the generated JSON file from the Saiph App into the designated `input` folder within the Saiph CLI directory.

3.  **Generate your theme:**
    * Open your terminal or command prompt.
    * Navigate to the Saiph CLI directory.
    * Run the command: `python3 main.py`
    * When prompted, enter the command: `build`

    Saiph CLI will then process your JSON configuration and generate your complete WordPress theme within the `output` folder.

---

## Components

Saiph is comprised of three core components that work together seamlessly:

* ### Saiph App
    This is the **graphical user interface (GUI)** where you'll configure your website's data. It allows you to intuitively define your website's structure, content, and settings, which are then exported as a JSON file.

* ### Saiph Library
    A comprehensive **component library** that provides a rich set of pre-built elements and sections. These components are used within the Saiph App to construct your web pages, ensuring consistency and accelerating the design process.

* ### Saiph CLI (Command Line Interface)
    A **Python-based command-line tool** that serves as the engine for theme generation. It takes the JSON configuration created by the Saiph App, processes it, and generates all the necessary files and configurations for your WordPress theme.

---

## Getting Started

To begin building your WordPress themes with Saiph, follow the "How it Works" section above. Ensure you have all three components of Saiph set up and accessible.