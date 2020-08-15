export default (req, res) => {
    res.statusCode = 200
    res.json([{
        bookId: '1',
        bookUserName: 'finish',
        bookName: 'Finish',
        bookImageUrl: "https://mybookbites.com/wp-content/uploads/2019/02/Finish.jpg",
        bookIntro: 'Finish (2017) is a guidebook for anyone who loves starting new projects but always struggles to complete them. You’ll discover how the real enemy to getting things done isn’t laziness, but rather the voice of the disgruntled perfectionist we all have inside us. This valuable advice can help you reduce needless, self-imposed pressure, giving you the opportunity to finish what you’ve started and be more productive.',
        bookTotalPages: '5',
        bookAuthorName: 'John Acuff',
        bookAuthorWebsite: "https://acuff.me/",
        bookAuthorIntro: 'Jon Acuff began his current career with a popular blog and has become a sought-after public speaker who’s inspired many to live a happier, more productive life. He is also the creator of “30 Days of Hustle,” an online challenge to help people reach their goals. His other books include the New York Times best sellers, Start, Do Over and Quitter.',
        bookAuthorPic: 'https://acuff.me/wp-content/uploads/2017/05/acuff_600x600.jpg'
    }, {
        bookId: '2',
        bookUserName: 'get-your-sht-together',
        bookName: 'Get your sh*t together.',
        bookImageUrl: "https://www.bookspeed.com/Images.ashx?i=/bookcovers/9781787473799.jpg",
        bookIntro: 'Get Your Sh*t Together (2016) is a frank and practical guide to sorting your life out. From dealing with anxiety to exercise regimens, from your relationship to your career, these stories will help you achieve your goals and get more out of your life.',
        bookTotalPages: '5',
        bookAuthorName: 'Sarah Knight',
        bookAuthorWebsite: "http://sarahknightbooks.com/",
        bookAuthorIntro: 'Sarah Knight is an editor and writer who previously spent 15 years working in the publishing industry in New York, editing bestselling authors such as Chris Cleave and Gillian Flynn. Knight’s TEDx Talk, “The Magic of Not Giving A F***” has been viewed over two million times.',
        bookAuthorPic: 'http://sarahknightbooks.com/wp-content/uploads/2015/06/IMG_2165bw-comp_sm_CROPPED.jpg'
    }, {
        bookId: '3',
        bookUserName: 'micromastery',
        bookName: 'Micro-Mastery',
        bookIntro: 'Micromastery (2017) teaches you how to effectively learn a new skill with a focused and gradual approach. With helpful, actionable tips and advice, it outlines all the steps you need to take to ensure you’re successful at any task you take on.',
        bookTotalPages: '3',
        bookImageUrl: "https://imgv2-2-f.scribdassets.com/img/audiobook/373080285/original/1e5cc7d74b/1566634184?v=1",
        bookAuthorName: 'Robert Twigger',
        bookAuthorWebsite: "http://www.roberttwigger.com/",
        bookAuthorIntro: 'Robert Twigger is a British author who studied politics and philosophy at Oxford University. He has written several works of fiction, as well as articles for publications such as the Daily Telegraph and the Sunday Times.',
        bookAuthorPic: 'http://www.roberttwigger.com/storage/thumbnails/3515758-5764272-thumbnail.jpg?__SQUARESPACE_CACHEVERSION=1266221280502'
    }])
}
