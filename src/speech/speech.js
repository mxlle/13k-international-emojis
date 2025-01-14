import { createElement } from "../utils/html-utils";
import { getSelectedLanguagesFromStorage } from "../utils/local-storage";
import { splitEmojis } from "../emojis/emoji-util";
import { getDefaultSet } from "../components/config-tools/emoji-selection/preselections";
import { getDefaultLanguage } from "../utils/language-util";

const synth = window.speechSynthesis;
const testEmojis = splitEmojis(getDefaultSet()).slice(0, 3);

export function getAvailableVoices() {
  return new Promise((resolve) => {
    synth.onvoiceschanged = () => {
      resolve(synth.getVoices());
    };
  });
}

export function speak(text, language, rate) {
  const utterThis = new SpeechSynthesisUtterance();
  utterThis.lang =
    language === getDefaultLanguage() ? getDefaultLanguage(true) : language;
  utterThis.text = text;
  utterThis.rate = rate ?? 1;
  utterThis.pitch = Math.sqrt(utterThis.rate);

  return new Promise((resolve) => {
    utterThis.onend = () => {
      resolve();
    };
    synth.speak(utterThis);
  });
}

export function getLanguageListElement(languages, onChange) {
  const languageList = createElement({ cssClass: "list" });
  const selectedLanguages = getSelectedLanguagesFromStorage();
  const checkboxes = [];

  function onChangeLanguage() {
    const selectedLanguages = [];

    for (let i = 0; i < checkboxes.length; i++) {
      const languageElement = checkboxes[i];
      if (languageElement.checked) {
        selectedLanguages.push(languageElement.getAttribute("id"));
      }
    }

    onChange(selectedLanguages);
  }

  languages.sort().forEach((lang) => {
    const checkbox = createElement({
      tag: "input",
    });
    const label = createElement({
      text: lang,
      tag: "label",
    });

    checkbox.type = "checkbox";
    checkbox.id = lang;
    checkbox.name = lang;
    checkbox.checked = selectedLanguages.includes(lang);
    checkbox.addEventListener("change", (event) => {
      const checked = event.currentTarget.checked;
      label.classList.toggle("selected", checked);
      if (checked) {
        label.setAttribute("data-emoji", "🗣️");
        speak("Testing language...", "en").then(async () => {
          for (let i = 0; i < testEmojis.length; i++) {
            const emoji = testEmojis[i];
            label.setAttribute("data-emoji", emoji);
            await speak(emoji, lang);
            label.removeAttribute("data-emoji");
          }
        });
      }
      onChangeLanguage();
    });

    label.setAttribute("for", lang);
    label.appendChild(checkbox);
    label.classList.toggle("selected", checkbox.checked);
    label.classList.toggle("default", lang === getDefaultLanguage());

    languageList.appendChild(label);

    checkboxes.push(checkbox);
  });

  return languageList;
}
