// Actions

// actions to receive messages
export function fetchMessages(channel) {
  const promise = fetch(`/api/v1/channels/${channel}/messages`, { credentials: "same-origin" })
    .then(response => response.json());

  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  };
}

export function signOut() {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch('/users/sign_out', {
    method: 'DELETE',
    headers: {'X-CSRF-Token': csrfToken},
    credentials: 'same-origin'
  });
}

// action to send a message
export function createMessage(channel, content) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(
    `/api/v1/channels/${channel}/messages`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      credentials: 'same-origin',
      body: JSON.stringify({ content })
    }
  ).then(r => r.json());


  return {
    type: 'MESSAGE_POSTED',
    payload: promise
  };
}
