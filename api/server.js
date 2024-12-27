export default function handler(req, res) {
    const { name } = req.query;
    const message = name ? `Hello, ${name}` : "Hello Guest";

    res.status(200).json({ message: message });
}


