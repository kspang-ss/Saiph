/**
 * @class Clipboard
 * Handles copying text to clipboard functionality.
 */

class Clipboard {
    constructor() {
        this.clipboard = [];
        this.add_copy_events();
    }

    /**
     * Copy to Clipboard
     * @description Copies the provided text to the clipboard.
     * @param {string} text - The text to be copied to the clipboard.
     * @return {void}
     */
    copy_to_clipboard(text) {
        navigator.clipboard.writeText(text).then(() => {}).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }

    /**
     * Add Copy Events
     * @description Adds click event listeners to all elements with the data-copy attribute.
     * @return {void}
     */
    add_copy_events() {
        const copy_button = document.querySelectorAll('[data-copy]');
        for (let i = 0; i < copy_button.length; i++) {
            copy_button[i].addEventListener('click', (event) => {
                const input = document.querySelector(`[data-copy-text="${copy_button[i].dataset.copy}"]`);
                if (!input) {
                    console.error('No input found for slug:', copy_button[i].dataset.copy);
                    return;
                }
                const text = input.value;
                if (!text) {
                    console.error('No text to copy');
                    return;
                }
                this.copy_to_clipboard(text);
            });
        }
    }
}