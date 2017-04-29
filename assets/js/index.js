var btn = document.getElementById('button'),
    tracker = document.getElementById('tracker'),
    trackerOffset = 0,
    page = document.getElementById('page'),
    water = document.getElementById('water'),
    cnt = document.getElementById('count'),
    percent = 20,
    random, diff, interval, isInProgress;

btn.addEventListener('click', update);

function update() {

    if (isInProgress) return;
    btn.removeEventListener('click', update);
    isInProgress = true;

    page.classList.add('page_animated');
    setTimeout(function() {
        page.classList.remove('page_animated');
        location.href = '/map';
    }, 1500);

    random = 100

    diff = percent - random;
    random = Math.abs(random);

    interval = setInterval(function() {

        if (diff === 0 || percent === random) {
            btn.addEventListener('click', update);
            clearInterval(interval);
            isInProgress = false;
            return;
        }

        if (diff < 0) {
            percent++;
        } else {
            percent--;
        }

        water.style.transform = 'translate(0, ' + (100 - percent) + '%)';
        water.querySelector('.water__inner').style.height = percent + '%';

        isInProgress = false;
    }, 16);
}