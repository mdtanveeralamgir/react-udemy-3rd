// api/new-meetup
// only post request

export default function handler(req, res) {
    if (res.method === 'POST') {
        const data = res.body;

        const {title, image, address, description} = data;
    }
}