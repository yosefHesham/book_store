const appId = 'NIhl56oi2nqoU1Jx4P3t';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const headers = {
  'Content-type': 'application/json; charset=UTF-8',
};

/**
 *
 * @param {Array} result
 */
const convertToArray = (result) => {
  const books = Object.keys(result).map((key) => ({
    item_id: key,
    title: result[key][0].title,
    author: result[key][0].author,
    category: result[key][0].category,
  }));

  return books;
};
export const fetchBooks = async () => {
  const url = `${baseUrl}/apps/${appId}/books`;
  const response = await fetch(url);
  const result = await response.json();
  return convertToArray(result);
};

export const deleteBook = async (id) => {
  const url = `${baseUrl}/apps/${appId}/books/${id}`;

  await fetch(url, {
    method: 'DELETE',
    headers,
    body: JSON.stringify({ item_id: id }),
  });
};

export const sendBook = async (book) => {
  const url = `${baseUrl}/apps/${appId}/books`;

  await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(book),
  });
};
