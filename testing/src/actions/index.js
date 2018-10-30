// Actions are payloads of information that send data from your application to your store
import { SAVE_COMMENT } from 'actions/types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}
