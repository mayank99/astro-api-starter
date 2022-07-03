export async function get({ params }) {
	return new Response(JSON.stringify(params), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
}
