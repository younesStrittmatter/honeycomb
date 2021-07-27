import { pdSpotEncode, photodiodeGhostBox } from "../lib/markup/photodiode"
import { addCursor } from "../lib/utils"
import { envConfig } from "../config/main"
import { jsPsych } from "jspsych-react/dist/experiment"
import { eventCodes } from "../config/trigger"
const { earningsDisplay } = require("../lib/markup/earnings")

/**
 * Displays the earnings from a trial.
 * @param {number} duration How long to display the earnings.
 * @returns trial The jsPsych trial object.
 */
const showEarnings = (duration) => {
  // Maps colors to their corresponding key code.
  const colorKeyMappings = {
    red: 82,
    blue: 66,
    yellow: 89
  }

  return {
    type: "html_keyboard_response",
    stimulus: "",
    response_ends_trial: false,
    trial_duration: duration,
    on_load: () => {
      pdSpotEncode(eventCodes.show_earnings)
    },
    on_start: (trial) => {
      // Get data from jsPsych to check the participant response.
      const data = jsPsych.data.get().values()
      // Check the preceding (choice) trial.
      const lastTrial = data[data.length - 1]
      const lastColor = lastTrial.color
      const response = lastTrial.key_press
      // Show reward or punishment depending on participant response.
      if (response === colorKeyMappings[lastColor]) {
        trial.stimulus = earningsDisplay(1)
      } else {
        trial.stimulus = earningsDisplay(-1)
      }
      if (envConfig.USE_PHOTODIODE) trial.stimulus += photodiodeGhostBox();
    },
    on_finish: (data) => {
      data.code = eventCodes.show_earnings
      addCursor("experiment");
    },
  }
}

export default showEarnings