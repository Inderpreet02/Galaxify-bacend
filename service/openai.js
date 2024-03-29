const axios = require('axios');

const generatePrompt = async (text) => {
	const response = await axios.post(
		'https://api.openai.com/v1/chat/completions',
		{
			model: 'gpt-3.5-turbo',
			messages: [{ role: 'user', content: text }],
		},
		{
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
			},
		}
	);

	console.log(response.data.choices);

	return response.data.choices[0].message.content;
};

module.exports = generatePrompt;
