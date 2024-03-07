# Quote Generator

A simple web application that generates random quotes. Users can retrieve quotes via API endpoints or contribute their own by adding them to the Quotes.txt file.

## Features

- **Random Quote Generation:** Fetch a random quote using the provided API endpoints.
- **User Contributions:** Add your favorite quotes to the collection by editing the Quotes.txt file.
- **Easy Setup:** Minimal dependencies and straightforward installation.

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/Wizqdev/Quote-Generator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Quote-Generator
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

### API Endpoints

**Get a Random Quote:**
- Endpoint: `/api/get/quote`
- Method: `GET`

**Post a New Quote:**
- Endpoint: `/api/post/quote`
- Method: `POST`
- Request Body (JSON):

    ```json
    {
        "Quote": "A RANDO QUOTE",
    }
    ```

## Contributing

Add your quotes to `Src/Quotes/Quotes.txt`. Each quote should be on a new line.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
