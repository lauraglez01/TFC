<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Book;
use App\Models\Category;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->createBook(
            'Don Quixote',
            'Miguel de Cervantes',
            'Spain',
            "Don Quixote has become so entranced by reading chivalric romances that he determines to become a knight-errant himself. In the company of his faithful squire, Sancho Panza, his exploits blossom in all sorts of wonderful ways. While Quixote's fancy often leads him astray—he tilts at windmills, imagining them to be giants—Sancho acquires cunning and a certain sagacity. Sane madman and wise fool, they roam the world together, and together they have haunted readers' imaginations for nearly four hundred years.",
            1610,
            '9788420727950',
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1479036492i/32953496.jpg',
            ['History', 'Adventure']
        );

        $this->createBook(
            '1984',
            'George Orwell',
            'UK',
            "A masterpiece of rebellion and imprisonment where war is peace freedom is slavery and Big Brother is watching. Thought Police, Big Brother, Orwellian - these words have entered our vocabulary because of George Orwell's classic dystopian novel 1984. The story of one man's Nightmare Odyssey as he pursues a forbidden love affair through a world ruled by warring states and a power structure that controls not only information but also individual thought and memory 1984 is a prophetic haunting tale More relevant than ever before 1984 exposes the worst crimes imaginable the destruction of truth freedom and individuality. With a foreword by Thomas Pynchon. This beautiful paperback edition features deckled edges and french flaps a perfect gift for any occasion.",
            1949,
            '9780451524935',
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg',
            ['Science', 'Thriller']
        );

        $this->createBook(
            'Pride and Prejudice',
            'Jane Austen',
            'UK',
            "Pride and Prejudice has charmed generations of readers for more than two centuries. Jane Austen's much-adapted novel is famed for its witty, spirited heroine, sensational romances, and deft remarks on the triumphs and pitfalls of social convention. Author Jane Austen (1775-1817) was an English novelist whose works of social realism achieved unprecedented critical and popular success, though Austen herself remained an anonymous writer throughout her life.",
            1813,
            '9780141040349',
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681804503i/129915654.jpg',
            ['Romance']
        );

        $this->createBook(
            'The Great Gatsby',
            'F. Scott Fitzgerald',
            'USA',
            "The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career. First published in 1925, this quintessential novel of the Jazz Age has been acclaimed by generations of readers. The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted “gin was the national drink and sex the national obsession,” it is an exquisitely crafted tale of America in the 1920s.",
            1925,
            '9780743273565',
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1650033243i/41733839.jpg',
            ['Fiction', 'History']
        );

        $this->createBook(
            'The Catcher in the Rye',
            'J.D. Salinger',
            'USA',
            "Fleeing the crooks at Pencey Prep, he pinballs around New York City seeking solace in fleeting encounters—shooting the bull with strangers in dive hotels, wandering alone round Central Park, getting beaten up by pimps and cut down by erstwhile girlfriends. The city is beautiful and terrible, in all its neon loneliness and seedy glamour, its mingled sense of possibility and emptiness. Holden passes through it like a ghost, thinking always of his kid sister Phoebe, the only person who really understands him, and his determination to escape the phonies and find a life of true meaning.",
            1951,
            '9780316769488',
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg',
            ['Romance', 'Mystery']
        );

        $this->createBook(
            'The Brothers Karamazov',
            'Fyodor Dostoevsky',
            'Russia',
            "The Brothers Karamazov is a murder mystery, a courtroom drama, and an exploration of erotic rivalry in a series of triangular love affairs involving the “wicked and sentimental” Fyodor Pavlovich Karamazov and his three sons―the impulsive and sensual Dmitri; the coldly rational Ivan; and the healthy, red-cheeked young novice Alyosha. Through the gripping events of their story, Dostoevsky portrays the whole of Russian life, is social and spiritual striving, in what was both the golden age and a tragic turning point in Russian culture.",
            1880,
            '9780140449242',
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1427728126i/4934.jpg',
            ['History', 'Thriller']
        );

        $this->createBook(
            'War and Peace',
            'Leo Tolstoy',
            'Russia',
            "War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment; Prince Andrei Bolkonsky, who leaves his family behind to fight in the war against Napoleon; and Natasha Rostov, the beautiful young daughter of a nobleman who intrigues both men.",
            1869,
            '9780143039990',
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1413215930i/656.jpg',
            ['History']
        );

        $this->createBook(
            'The Alchemist',
            'Paulo Coelho',
            'Brazil',
            "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, following our dreams.",
            1988,
            '9780061122415',
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg',
            ['Fantasy']
        );

        $this->createBook(
            'The Road',
            'Cormac McCarthy',
            'USA',
            "A father and his son walk alone through burned America. Nothing moves in the ravaged landscape save the ash on the wind. It is cold enough to crack stones, and when the snow falls it is gray. The sky is dark. Their destination is the coast, although they don’t know what, if anything, awaits them there. They have nothing; just a pistol to defend themselves against the lawless bands that stalk the road, the clothes they are wearing, a cart of scavenged food—and each other.",
            2006,
            '9780307387134',
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1600241424i/6288.jpg',
            ['Science', 'Thriller']
        );

        $this->createBook(
            'The Grapes of Wrath',
            'John Steinbeck',
            'USA',
            "First published in 1939, Steinbeck’s Pulitzer Prize-winning epic of the Great Depression chronicles the Dust Bowl migration of the 1930s and tells the story of one Oklahoma farm family, the Joads—driven from their homestead and forced to travel west to the promised land of California. Out of their trials and their repeated collisions against the hard realities of an America divided into Haves and Have-Nots evolves a drama that is intensely human yet majestic in its scale and moral vision, elemental yet plainspoken, tragic but ultimately stirring in its human dignity. A portrait of the conflict between the powerful and the powerless, of one man’s fierce reaction to injustice, and of one woman’s stoical strength, the novel captures the horrors of the Great Depression and probes into the very nature of equality and justice in America. At once a naturalistic epic, captivity narrative, road novel, and transcendental gospel, Steinbeck’s powerful landmark novel is perhaps the most American of American Classics.",
            1939,
            '9780143039433',
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1375670575i/18114322.jpg',
            ['History']
        );

        $this->createBook(
            'Les Misérables',
            'Victor Hugo',
            'France',
            "Victor Hugo's tale of injustice, heroism and love follows the fortunes of Jean Valjean, an escaped convict determined to put his criminal past behind him. But his attempts to become a respected member of the community are constantly put under threat: by his own conscience, when, owing to a case of mistaken identity, another man is arrested in his place; and by the relentless investigations of the dogged Inspector Javert. It is not simply for himself that Valjean must stay free, however, for he has sworn to protect the baby daughter of Fantine, driven to prostitution by poverty.",
            1862,
            '9780451419439',
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1509394980i/36377471.jpg',
            ['Romance', 'History']
        );

        $this->createBook(
            'Fahrenheit 451',
            'Ray Bradbury',
            'USA',
            "Fahrenheit 451 is a fictional novel written by American writer Ray Douglas Bradbury in the genre of psychological and drama. The work takes its name from the unit of temperature in physics. Thus, 451 Fahrenheit is needed for ordinary paper to ignite. The events in the work take place in America, which is experiencing a period of transition. The work, which tells the story of people whose books and houses are burned, was published in 1953. Fahrenheit 451: A time interval in the America of the future, where the duty of firefighters is not to extinguish, but to burn books... The hero of our work - Guy Montag is also one of those firefighters. Guy, who always does his job with enthusiasm and love, meets a 17-year-old girl named Clairese on the road one day. After the dialogue between them and Clairese, Guy has already begun to question everything inside. His job, his wife Mildred, and his boss Beatty. Why are they burning books?",
            1953,
            '9781451673319',
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg',
            ['Science', 'Fiction']
        );

        $this->createBook(
            'The Picture of Dorian Gray',
            'Oscar Wilde',
            'UK',
            "Enthralled by his own exquisite portrait, Dorian Gray exchanges his soul for eternal youth and beauty. Influenced by his friend Lord Henry Wotton, he is drawn into a corrupt double life, indulging his desires in secret while remaining a gentleman in the eyes of polite society. Only his portrait bears the traces of his decadence. The Picture of Dorian Gray was a succès de scandale. Early readers were shocked by its hints at unspeakable sins, and the book was later used as evidence against Wilde at the Old Bailey in 1895.",
            1890,
            '9780141439570',
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1454087681i/489732.jpg',
            ['Mystery', 'Thriller']
        );

        $this->createBook(
            'Alice\'s Adventures in Wonderland',
            'Lewis Carroll',
            'UK',
            "When Alice sees a white rabbit take a watch out of its waistcoat pocket she decides to follow it, and a sequence of most unusual events is set in motion. This mini book contains the entire topsy-turvy stories of Alice's Adventures in Wonderland and Through the Looking-Glass, accompanied by practical notes and Martina Pelouso's memorable full-colour illustrations.",
            1865,
            '9780141439761',
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630487234i/24213.jpg',
            ['Fantasy']
        );

        $this->createBook(
            'Dracula',
            'Bram Stoker',
            'Ireland',
            "When Jonathan Harker visits Transylvania to help Count Dracula with the purchase of a London house, he makes a series of horrific discoveries about his client. Soon afterwards, various bizarre incidents unfold in England: an apparently unmanned ship is wrecked off the coast of Whitby; a young woman discovers strange puncture marks on her neck; and the inmate of a lunatic asylum raves about the 'Master' and his imminent arrival.",
            1897,
            '9780486411095',
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg',
            ['Mystery', 'Thriller']
        );

        $this->createBook(
            'The Count of Monte Cristo',
            'Alexandre Dumas',
            'France',
            "Thrown in prison for a crime he has not committed, Edmond Dantès is confined to the grim fortress of If. There he learns of a great hoard of treasure hidden on the Isle of Monte Cristo and he becomes determined not only to escape, but also to use the treasure to plot the destruction of the three men responsible for his incarceration. Dumas’ epic tale of suffering and retribution, inspired by a real-life case of wrongful imprisonment, was a huge popular success when it was first serialized in the 1840s.",
            1844,
            '9780451531797',
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1724863997i/7126.jpg',
            ['Thriller', 'History']
        );
    }

    private function createBook($title, $author, $country, $description, $year, $isbn, $cover, $categoryNames)
    {
        $book = Book::create([
            'title' => $title,
            'author' => $author,
            'country' => $country,
            'description' => $description,
            'published_year' => $year,
            'isbn' => $isbn,
            'cover' => $cover
        ]);

        $categories = Category::whereIn('name', $categoryNames)->pluck('id');
        $book->categories()->attach($categories);
    }
}
