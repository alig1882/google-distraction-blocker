const current_url = window.location.href;
const blacklisted_queries = ['tbm=isch', 'tbm=nws', 'tbm=vid', 'udm=2'];
const has_blacklisted_queries = blacklisted_queries.some(blacklisted_value => current_url.includes(blacklisted_value));

if (has_blacklisted_queries) window.location.replace('https://tailwindcss.com');

const newsElements = document.getElementsByTagName('g-section-with-header');
while (newsElements.length > 0) {
    const element = newsElements[0];
    element.remove();
}

const videoElement = document.querySelector('div[jscontroller="UzbKLd"]');
videoElement?.remove();
