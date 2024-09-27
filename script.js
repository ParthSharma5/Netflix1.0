const faqItems = document.querySelectorAll('.faqbox');
faqItems.forEach(item =>{
    const ques = item.querySelector('span');
    const ans = item.nextElementSibling;
    const plusIcon = item.querySelector('.icon-plus');
    const crossIcon = item.querySelector('.icon-cross');
    item.addEventListener('click',()=>{
        if(ans.style.display === 'none'|| ans.style.display ===''){
            ans.style.display = 'block';
            plusIcon.style.display = 'none';
            crossIcon.style.display = 'block';
        } else{
            ans.style.display = 'none';
            plusIcon.style.display = 'none';
            crossIcon.style.display = 'none';
        }
    });
});
fetch('https://freetestapi.com/api/v1/movies?limit=100')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const trendingSection = document.querySelector('.added-img');

        if (!trendingSection) {
            console.error("Trending section not found!");
            return;
        }

        data.forEach(movie => {
            const movieImage = document.createElement('img');
            movieImage.src = movie.poster || 'fallback.jpg';
            movieImage.alt = movie.title;

            movieImage.style.width = '150px';
            movieImage.style.height = 'auto';

            trendingSection.appendChild(movieImage);
        });
    })
    .catch(error => {
        console.error('Error fetching the movies:', error);
    });
