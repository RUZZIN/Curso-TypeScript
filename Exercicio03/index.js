function avaliacao(estrelas) {
    if (typeof estrelas === 'boolean' && !estrelas) {
        return 'O usuário não deixou uma avaliação.';
    }
    if (typeof estrelas === 'number') {
        switch (estrelas) {
            case 1:
                return 'Muito insatisfeito com a experiência.';
            case 2:
                return 'Insatisfeito com a experiência.';
            case 3:
                return 'Avaliação média.';
            case 4:
                return 'Satisfeito com a experiência.';
            case 5:
                return 'Muito satisfeito com a experiência.';
            default:
                return 'Avaliação inválida!';
        }
    }
    return 'Avaliação inválida. Use uma avaliação de 1 a 5 estrelas ou `false`.';
}
console.log(avaliacao(3));
console.log(avaliacao(false));
