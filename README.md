# vortan_hyspell

Armenian spellcheck with hunspell dictionaries

## Usage

```
  index [options] [command]
```

Commands:

```
  correct <word>  Return suggestions for misspelled word
```

Options:

```
  -h, --help             output usage information
  -V, --version          output the version number
  -w, --western          Spellcheck using Western Armenian dictionary (default is Eastern)
  -c, --custom <custom>  Spellcheck using custom dictionary
```

## Example

``` bash
npm install
node index.js correct վորթ

>> [ false, [ 'որթ', 'մորթ', 'տորթ', 'հորթ', 'խորթ', 'չթվոր' ] ]
```

Where the first value indicated whether the word is misspelled and the second value shows suggestions.
