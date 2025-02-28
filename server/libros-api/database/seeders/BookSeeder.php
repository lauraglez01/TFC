<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Book::insert([
            [
                'title' => 'El Quijote',
                'author' => 'Miguel de Cervantes',
                'country' => 'Spain',
                'description' => "Don Quixote, a novel by Miguel de Cervantes, tells the story of an aging knight who, inspired by chivalric romances, sets out on adventures with his squire, Sancho Panza.",
                'published_year' => 1610,
                'isbn' => '9788420727950',
                'categories' => json_encode(['Classic Literature', 'Historical', 'Adventure'])
            ],
            [
                'title' => 'One Hundred Years of Solitude',
                'author' => 'Gabriel García Márquez',
                'country' => 'Colombia',
                'description' => 'The novel tells the story of the Buendía family in the fictional town of Macondo, spanning several generations, with magical realism.',
                'published_year' => 1967,
                'isbn' => '9780307474728',
                'categories' => json_encode(['Magical Realism', 'Family Saga'])
            ],
            [
                'title' => 'The Shadow of the Wind',
                'author' => 'Carlos Ruiz Zafón',
                'country' => 'Spain',
                'description' => 'A young man named Daniel discovers a book in the Cemetery of Forgotten Books, which leads him to unravel a literary mystery.',
                'published_year' => 2001,
                'isbn' => '9788408170716',
                'categories' => json_encode(['Mystery', 'Thriller'])
            ],
            [
                'title' => '1984',
                'author' => 'George Orwell',
                'country' => 'United Kingdom',
                'description' => 'A dystopian novel that depicts a totalitarian world where the government manipulates the truth and controls citizens’ lives.',
                'published_year' => 1949,
                'isbn' => '9780451524935',
                'categories' => json_encode(['Dystopian Fiction', 'Political Fiction'])
            ],
            [
                'title' => 'Pride and Prejudice',
                'author' => 'Jane Austen',
                'country' => 'United Kingdom',
                'description' => 'A romance between Elizabeth Bennet and Mr. Darcy that explores social classes and family struggles in early 19th-century England.',
                'published_year' => 1813,
                'isbn' => '9780141040349',
                'categories' => json_encode(['Romance', 'Social Criticism'])
            ],
            [
                'title' => 'The Great Gatsby',
                'author' => 'F. Scott Fitzgerald',
                'country' => 'United States',
                'description' => 'The story of Jay Gatsby and his obsession with Daisy Buchanan, offering a critique of the decadence and disillusionment of American society.',
                'published_year' => 1925,
                'isbn' => '9780743273565',
                'categories' => json_encode(['Classic Fiction', 'Tragedy'])
            ],
            [
                'title' => 'Don Juan Tenorio',
                'author' => 'Tirso de Molina',
                'country' => 'Spain',
                'description' => 'A classic Spanish play about the legendary seducer and libertine, Don Juan, whose actions lead to his downfall.',
                'published_year' => 1630,
                'isbn' => '9788497324597',
                'categories' => json_encode(['Play', 'Tragedy'])
            ],
            [
                'title' => 'The Catcher in the Rye',
                'author' => 'J.D. Salinger',
                'country' => 'United States',
                'description' => 'The story of Holden Caulfield, a disenchanted teenager who rebels against the phoniness of adult society.',
                'published_year' => 1951,
                'isbn' => '9780316769488',
                'categories' => json_encode(['Coming-of-Age', 'Literary Fiction'])
            ],
            [
                'title' => 'The Brothers Karamazov',
                'author' => 'Fyodor Dostoevsky',
                'country' => 'Russia',
                'description' => 'A philosophical novel about the moral and spiritual dilemmas faced by three brothers in 19th-century Russia.',
                'published_year' => 1880,
                'isbn' => '9780140449242',
                'categories' => json_encode(['Philosophical Fiction'])
            ],
            [
                'title' => 'Moby-Dick',
                'author' => 'Herman Melville',
                'country' => 'United States',
                'description' => 'A sailor named Ishmael recounts his experiences on the whaling ship Pequod, led by the obsessed Captain Ahab in pursuit of the elusive white whale.',
                'published_year' => 1851,
                'isbn' => '9780142437247',
                'categories' => json_encode(['Adventure', 'Philosophical Fiction'])
            ],
            [
                'title' => 'Brave New World',
                'author' => 'Aldous Huxley',
                'country' => 'United Kingdom',
                'description' => 'A dystopian novel that explores a world where humanity is controlled by pleasure, technology, and social engineering.',
                'published_year' => 1932,
                'isbn' => '9780060850524',
                'categories' => json_encode(['Dystopian Fiction', 'Science Fiction'])
            ],
            [
                'title' => 'Crime and Punishment',
                'author' => 'Fyodor Dostoevsky',
                'country' => 'Russia',
                'description' => 'The psychological drama of a young man, Raskolnikov, who commits a murder and struggles with his conscience.',
                'published_year' => 1866,
                'isbn' => '9780486415871',
                'categories' => json_encode(['Psychological Fiction', 'Crime Fiction'])
            ],
            [
                'title' => 'War and Peace',
                'author' => 'Leo Tolstoy',
                'country' => 'Russia',
                'description' => 'A sweeping epic set against the backdrop of Napoleon’s invasion of Russia, following the lives of aristocratic families.',
                'published_year' => 1869,
                'isbn' => '9780143039990',
                'categories' => json_encode(['Historical Fiction'])
            ],
            [
                'title' => 'The Divine Comedy',
                'author' => 'Dante Alighieri',
                'country' => 'Italy',
                'description' => 'A journey through Hell, Purgatory, and Paradise, exploring themes of sin, redemption, and divine justice.',
                'published_year' => 1320,
                'isbn' => '9780140448954',
                'categories' => json_encode(['Poetry', 'Philosophical Fiction'])
            ],
            [
                'title' => 'The Stranger',
                'author' => 'Albert Camus',
                'country' => 'France',
                'description' => 'A philosophical novel about an emotionally detached man, Meursault, who faces the absurdity of life and the meaning of existence.',
                'published_year' => 1942,
                'isbn' => '9780679764022',
                'categories' => json_encode(['Existential Fiction', 'Philosophical Fiction'])
            ],
            [
                'title' => 'The Alchemist',
                'author' => 'Paulo Coelho',
                'country' => 'Brazil',
                'description' => 'A young shepherd named Santiago embarks on a journey to find treasure, learning life lessons about following his dreams.',
                'published_year' => 1988,
                'isbn' => '9780061122415',
                'categories' => json_encode(['Philosophical Fiction', 'Adventure'])
            ],
            [
                'title' => 'The Road',
                'author' => 'Cormac McCarthy',
                'country' => 'United States',
                'description' => 'A haunting post-apocalyptic novel about a father and son’s struggle to survive in a bleak, devastated world.',
                'published_year' => 2006,
                'isbn' => '9780307387134',
                'categories' => json_encode(['Post-Apocalyptic Fiction', 'Survival Fiction'])
            ],
            [
                'title' => 'The Grapes of Wrath',
                'author' => 'John Steinbeck',
                'country' => 'United States',
                'description' => 'The story of the Joad family’s hardships as they travel westward during the Great Depression.',
                'published_year' => 1939,
                'isbn' => '9780143039433',
                'categories' => json_encode(['Historical Fiction', 'Social Fiction'])
            ],
            [
                'title' => 'Les Misérables',
                'author' => 'Victor Hugo',
                'country' => 'France',
                'description' => 'A sprawling epic about the struggles of several characters in post-revolutionary France, focusing on themes of justice, love, and redemption.',
                'published_year' => 1862,
                'isbn' => '9780451419439',
                'categories' => json_encode(['Historical Fiction', 'Social Criticism'])
            ],
            [
                'title' => 'Fahrenheit 451',
                'author' => 'Ray Bradbury',
                'country' => 'United States',
                'description' => 'A dystopian novel set in a future where books are banned and “firemen” burn any that are found.',
                'published_year' => 1953,
                'isbn' => '9781451673319',
                'categories' => json_encode(['Dystopian Fiction', 'Science Fiction'])
            ],
            [
                'title' => 'The Picture of Dorian Gray',
                'author' => 'Oscar Wilde',
                'country' => 'United Kingdom',
                'description' => 'The story of a young man whose portrait ages while he remains eternally youthful, as he lives a hedonistic and morally corrupt life.',
                'published_year' => 1890,
                'isbn' => '9780141439570',
                'categories' => json_encode(['Gothic Fiction', 'Philosophical Fiction'])
            ],
            [
                'title' => 'Alice\'s Adventures in Wonderland',
                'author' => 'Lewis Carroll',
                'country' => 'United Kingdom',
                'description' => 'A young girl named Alice falls through a rabbit hole and encounters strange creatures in a fantastical world.',
                'published_year' => 1865,
                'isbn' => '9780141439761',
                'categories' => json_encode(['Fantasy', 'Children\'s Literature'])
            ],
            [
                'title' => 'Dracula',
                'author' => 'Bram Stoker',
                'country' => 'Ireland',
                'description' => 'The classic Gothic novel about Count Dracula’s attempt to move to England in order to spread the undead curse.',
                'published_year' => 1897,
                'isbn' => '9780486411095',
                'categories' => json_encode(['Horror', 'Gothic Fiction'])
            ],
            [
                'title' => 'The Count of Monte Cristo',
                'author' => 'Alexandre Dumas',
                'country' => 'France',
                'description' => 'A young man, Edmond Dantès, is wrongfully imprisoned, and after escaping, he seeks revenge on those who betrayed him.',
                'published_year' => 1844,
                'isbn' => '9780451531797',
                'categories' => json_encode(['Adventure', 'Revenge'])
            ]
        ]);
    }
}
