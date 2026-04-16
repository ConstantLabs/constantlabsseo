const response = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer re_2FVx7Buu_DurtfA9P9xRaSdQwrYh5J6bV',
  },
  body: JSON.stringify({
    from: 'ConstantSEO <onboarding@resend.dev>',
    to: ['akhmad6093@gmail.com'],
    subject: 'Test Email from ConstantSEO',
    html: '<p>This is a test email from ConstantSEO website!</p>',
  }),
});

const result = await response.json();
console.log('Status:', response.status);
console.log('Result:', JSON.stringify(result, null, 2));