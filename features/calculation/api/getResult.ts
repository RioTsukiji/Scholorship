const result = async (req, res) => {
    const response = await fetch(
        `https://httpbin.org/get`
    );
    const data = await response.json();
    res.status(200).json(data);
};

export default result;