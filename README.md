# vortan_hyspell

Armenian spellcheck with hunspell dictionaries

## Docs

- [vortan_docs](https://github.com/DataPoint-Armenia/vortan_docs)

## Usage

Usage:

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
{"word":"վորթ","suggestions":["որթ","թորթ","վ որթ"]}
```
