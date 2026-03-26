(function () {
    const BASE_IMAGE_URL = "https://rc7502.github.io/randomtarot/cards/";
    const IMAGE_EXTENSION = ".png";

    const CARDS = [
        { name: "The Fool", slug: "Fool" },
        { name: "The Magician", slug: "Magician" },
        { name: "The High Priestess", slug: "HighPriestess" },
        { name: "The Empress", slug: "Empress" },
        { name: "The Emperor", slug: "Emperor" },
        { name: "The Hierophant", slug: "Hierophant" },
        { name: "The Lovers", slug: "Lovers" },
        { name: "The Chariot", slug: "Chariot" },
        { name: "Strength", slug: "Strength" },
        { name: "The Hermit", slug: "Hermit" },
        { name: "Wheel of Fortune", slug: "WheelofFortune" },
        { name: "Justice", slug: "Justice" },
        { name: "The Hanged Man", slug: "HangedMan" },
        { name: "Death", slug: "Death" },
        { name: "Temperance", slug: "Temperance" },
        { name: "The Devil", slug: "Devil" },
        { name: "The Tower", slug: "Tower" },
        { name: "The Star", slug: "Star" },
        { name: "The Moon", slug: "Moon" },
        { name: "The Sun", slug: "Sun" },
        { name: "Judgement", slug: "Judgement" },
        { name: "The World", slug: "World" },

        { name: "Ace of Cups", slug: "cups-ace" },
        { name: "Two of Cups", slug: "cups-02" },
        { name: "Three of Cups", slug: "cups-03" },
        { name: "Four of Cups", slug: "cups-04" },
        { name: "Five of Cups", slug: "cups-05" },
        { name: "Six of Cups", slug: "cups-06" },
        { name: "Seven of Cups", slug: "cups-07" },
        { name: "Eight of Cups", slug: "cups-08" },
        { name: "Nine of Cups", slug: "cups-09" },
        { name: "Ten of Cups", slug: "cups-10" },
        { name: "Page of Cups", slug: "cups-page" },
        { name: "Knight of Cups", slug: "cups-knight" },
        { name: "Queen of Cups", slug: "cups-queen" },
        { name: "King of Cups", slug: "cups-king" },

        { name: "Ace of Pentacles", slug: "pentacles-ace" },
        { name: "Two of Pentacles", slug: "pentacles-02" },
        { name: "Three of Pentacles", slug: "pentacles-03" },
        { name: "Four of Pentacles", slug: "pentacles-04" },
        { name: "Five of Pentacles", slug: "pentacles-05" },
        { name: "Six of Pentacles", slug: "pentacles-06" },
        { name: "Seven of Pentacles", slug: "pentacles-07" },
        { name: "Eight of Pentacles", slug: "pentacles-08" },
        { name: "Nine of Pentacles", slug: "testimage" },
        { name: "Ten of Pentacles", slug: "pentacles-10" },
        { name: "Page of Pentacles", slug: "pentacles-page" },
        { name: "Knight of Pentacles", slug: "pentacles-knight" },
        { name: "Queen of Pentacles", slug: "pentacles-queen" },
        { name: "King of Pentacles", slug: "pentacles-king" },

        { name: "Ace of Swords", slug: "swords-ace" },
        { name: "Two of Swords", slug: "swords-02" },
        { name: "Three of Swords", slug: "swords-03" },
        { name: "Four of Swords", slug: "swords-04" },
        { name: "Five of Swords", slug: "swords-05" },
        { name: "Six of Swords", slug: "swords-06" },
        { name: "Seven of Swords", slug: "swords-07" },
        { name: "Eight of Swords", slug: "swords-08" },
        { name: "Nine of Swords", slug: "swords-09" },
        { name: "Ten of Swords", slug: "swords-10" },
        { name: "Page of Swords", slug: "swords-page" },
        { name: "Knight of Swords", slug: "swords-knight" },
        { name: "Queen of Swords", slug: "swords-queen" },
        { name: "King of Swords", slug: "swords-king" },

        { name: "Ace of Wands", slug: "wands-ace" },
        { name: "Two of Wands", slug: "wands-02" },
        { name: "Three of Wands", slug: "wands-03" },
        { name: "Four of Wands", slug: "wands-04" },
        { name: "Five of Wands", slug: "wands-05" },
        { name: "Six of Wands", slug: "wands-06" },
        { name: "Seven of Wands", slug: "wands-07" },
        { name: "Eight of Wands", slug: "wands-08" },
        { name: "Nine of Wands", slug: "wands-09" },
        { name: "Ten of Wands", slug: "wands-10" },
        { name: "Page of Wands", slug: "wands-page" },
        { name: "Knight of Wands", slug: "wands-knight" },
        { name: "Queen of Wands", slug: "wands-queen" },
        { name: "King of Wands", slug: "wands-king" }
    ];

    const cardImage = document.getElementById("tarot-card-image");
    const cardLabel = document.getElementById("tarot-card-label");

    if (!cardImage || !cardLabel) {
        return;
    }

    function getRandomCard() {
        const index = Math.floor(Math.random() * CARDS.length);
        const reversed = Math.random() < 0.5;

        return {
            card: CARDS[index],
            reversed
        };
    }

    function buildImageUrl(card) {
        return BASE_IMAGE_URL + card.slug + IMAGE_EXTENSION;
    }

    function renderCard() {
        const result = getRandomCard();
        const imageUrl = buildImageUrl(result.card);
        const labelText = result.reversed
            ? `(Reversed) ${result.card.name}`
            : result.card.name;

        cardImage.src = imageUrl;
        cardImage.alt = labelText;
        cardImage.style.transform = result.reversed ? "rotate(180deg)" : "rotate(0deg)";
        cardLabel.textContent = labelText;
    }

    renderCard();
})();