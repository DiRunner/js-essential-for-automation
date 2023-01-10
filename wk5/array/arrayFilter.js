'use strict';

/**
 * Use of filter method
 * @usecase
 * Find elements which meets some conditions
 * 
 * @returns
 * filtered array
 */

let books = [
    {
        category: 'reference',
        author: 'Nipel Rees',
        title: 'Sayings of the century',
        price: 8.95
    },
    {
        category: 'fiction',
        author: 'Gabriel Garcia Marquez',
        title: '100 anos de soledad',
        price: 18.95
    },
    {
        category: 'non-fiction',
        author: 'Rober Kiyosaki',
        title: 'Padre Rico Padre Pobre',
        price: 3.95
    }
]

// get books which are > 10

let booksOver10 = books.filter(el => el.price > 10)

console.log(booksOver10);

console.log(`books with price > 10: ${JSON.stringify(booksOver10)}`);