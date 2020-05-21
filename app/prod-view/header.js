function Header() {
    return React.createElement(
        'nav',
        { className: 'title' },
        React.createElement(
            'h1',
            null,
            'Multilabel classifier'
        ),
        React.createElement(
            'span',
            { className: 'ramaTwitter' },
            React.createElement(
                'a',
                { href: 'www.unal.edu.co', target: '_blank' },
                'jballes@unal.edu.co'
            )
        )
    );
}
