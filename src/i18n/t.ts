import messages from './messages/ru.json'

/**
 * Typed accessor for UI strings.
 * Returns the full messages object; use dot-notation on the result.
 * Swapping locale only requires changing the import here.
 */
export function t(): typeof messages {
  return messages
}

export type Messages = typeof messages
