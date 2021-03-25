function generate(
  name,
  {
    black,
    alpha70,
    gray1,
    gray2,
    gray3,
    gray4,
    white1,
    white2,
    white3,
    blue1,
    blue2,
    blue3,
    blue4,
    red1,
    red2,
    purple1,
    purple2,
    yellow1,
    yellow2,
    green1,
    green2,
    green3,
  },
) {
  return `{
  "name": "${name}",
  "type": "dark",
  "colors": {
    "editor.background": "${gray1}",
    "editor.foreground": "${white1}",
    "editor.lineHighlightBackground": "${black}",
    "editor.selectionBackground": "${blue1}",
    "editor.foldBackground": "${gray2}",
    "peekViewEditor.background": "${gray1}",

    "editorCursor.foreground": "${white2}",
    "editorLineNumber.activeForeground": "${white1}",
    "editorLineNumber.foreground": "${gray4}",
    "editorWhitespace.foreground": "${gray3}",
    "editorUnnecessaryCode.opacity": "${alpha70}",

    "tab.activeBorder": "${blue2}"
  },
  "tokenColors": [
    {
      "name": "Comment",
      "scope": ["comment", "punctuation.definition.comment"],
      "settings": {
        "foreground": "${gray4}"
      }
    },
    {
      "name": "Variables",
      "scope": ["variable", "string constant.other.placeholder"],
      "settings": {
        "fontStyle": " italic",
        "foreground": "${red1}"
      }
    },
    {
      "name": "Colors",
      "scope": ["constant.other.color"],
      "settings": {
        "foreground": "${purple2}"
      }
    },
    {
      "name": "Invalid",
      "scope": ["invalid", "invalid.illegal"],
      "settings": {
        "fontStyle": "",
        "foreground": "${white3}"
      }
    },
    {
      "name": "Keyword",
      "scope": "keyword",
      "settings": {
        "foreground": "${yellow1}"
      }
    },
    {
      "name": "Storage",
      "scope": ["storage.type", "storage.modifier"],
      "settings": {
        "fontStyle": "italic",
        "foreground": "${blue4}"
      }
    },
    {
      "name": "Operator, Misc",
      "scope": [
        "keyword.control",
        "punctuation",
        "meta.tag",
        "punctuation.definition.tag",
        "punctuation.separator.inheritance.php",
        "punctuation.definition.tag.html",
        "punctuation.definition.tag.begin.html",
        "punctuation.definition.tag.end.html",
        "punctuation.section.embedded",
        "keyword.other.template",
        "keyword.other.substitution"
      ],
      "settings": {
        // "foreground": "${white3}"
      }
    },
    {
      "name": "Tag Name",
      "scope": [
        "entity.name.tag",
        "meta.tag.sgml",
        "storage.modifier"
      ],
      "settings": {
        "foreground": "${red2}"
      }
    },
    {
      "name": "Function",
      "scope": [
        "entity.name.function",
        "meta.function-call",
        "variable.function",
        "support.function",
        "keyword.other.special-method"
      ],
      "settings": {
        "foreground": "${green2}"
      }
    },
    {
      "name": "Block Level Variables",
      "scope": ["meta.block variable.other"],
      "settings": {
        "foreground": "${red1}"
      }
    },
    {
      "name": "Other Variable, String Link",
      "scope": ["support.other.variable", "string.other.link"],
      "settings": {
        "fontStyle": " italic",
        "foreground": "${red1}"
      }
    },
    {
      "name": "Number constant, Tag Attribute, Embedded",
      "scope": [
        "constant.numeric",
        "keyword.other.unit",
        "keyword.other"
      ],
      "settings": {
        "foreground": "${purple2}",
        "fontStyle": "bold"
      }
    },
    {
      "name": "Built-in constant",
      "scope": ["constant.language", "constant.escape"],
      "settings": {
        "foreground": "${purple2}",
        "fontStyle": "bold italic"
      }
    },
    {
      "name": "Library constant",
      "scope": ["support.constant", "support.class"],
      "settings": {
        "fontStyle": "bold",
        "foreground": "${green1}"
      }
    },
    {
      "name": "User-defined constant",
      "scope": ["constant.character", "constant.other"],
      "settings": {
        "foreground": "${purple2}"
      }
    },
    {
      "name": "String, Symbols, Markup Heading",
      "scope": [
        "string",
        "constant.other.symbol",
        "constant.other.key",
        "markup.heading",
        "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
      ],
      "settings": {
        "foreground": "${green3}",
        "fontStyle": "bold"
      }
    },
    {
      "name": "Class, Support",
      "scope": [
        "entity.name",
        "support.orther.namespace.use.php",
        "meta.use.php",
        "support.other.namespace.php",
        "support.type.sys-types"
      ],
      "settings": {
        "foreground": "${blue3}"
      }
    },
    {
      "name": "Entity Types",
      "scope": ["support.type"],
      "settings": {
        "foreground": "${blue3}"
      }
    },
    {
      "name": "CSS Class and Support",
      "scope": [
        "source.css support.type.property-name",
        "source.sass support.type.property-name",
        "source.scss support.type.property-name",
        "source.less support.type.property-name",
        "source.stylus support.type.property-name",
        "source.postcss support.type.property-name"
      ],
      "settings": {
        "fontStyle": "",
        "foreground": "${blue3}"
      }
    },
    {
      "name": "Sub-methods",
      "scope": [
        "entity.name.module.js",
        "variable.import.parameter.js",
        "variable.other.class.js"
      ],
      "settings": {
        "foreground": "${red2}"
      }
    },
    {
      "name": "Language methods",
      "scope": ["variable.language"],
      "settings": {
        "fontStyle": "italic",
        "foreground": "${blue3}"
      }
    },
    {
      "name": "Entity name",
      "scope": ["entity.name.method.js"],
      "settings": {
        "fontStyle": "italic",
        "foreground": "${blue3}"
      }
    },
    {
      "name": "Meta method",
      "scope": [
        "meta.class-method.js entity.name.function.js",
        "variable.function.constructor"
      ],
      "settings": {
        "foreground": "${blue3}"
      }
    },
    {
      "name": "Attributes",
      "scope": ["entity.other.attribute-name"],
      "settings": {
        "foreground": "${green1}"
      }
    },
    {
      "name": "HTML Attributes",
      "scope": [
        "text.html.basic entity.other.attribute-name.html",
        "text.html.basic entity.other.attribute-name"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "${yellow2}"
      }
    },
    {
      "name": "CSS Classes",
      "scope": ["entity.other.attribute-name.class"],
      "settings": {
        "fontStyle": "",
        "foreground": "${green1}"
      }
    },
    {
      "name": "CSS ID's",
      "scope": ["entity.other.attribute-name.id"],
      "settings": {
        "fontStyle": "",
        "foreground": "${yellow2}"
      }
    },
    {
      "name": "CASS ID's",
      "scope": ["source.sass keyword.control"],
      "settings": {
        "fontStyle": "",
        "foreground": "${blue3}"
      }
    },
    {
      "name": "Inserted",
      "scope": ["markup.inserted"],
      "settings": {
        "foreground": "${green1}"
      }
    },
    {
      "name": "Deleted",
      "scope": ["markup.deleted"],
      "settings": {
        "foreground": "${red2}"
      }
    },
    {
      "name": "Changed",
      "scope": ["markup.changed"],
      "settings": {
        "foreground": "${purple1}"
      }
    },
    {
      "name": "Regular Expressions",
      "scope": ["string.regexp"],
      "settings": {
        "foreground": "${blue4}"
      }
    },
    {
      "name": "Escape Characters",
      "scope": ["constant.character.escape"],
      "settings": {
        "foreground": "${blue4}"
      }
    },
    {
      "name": "URL",
      "scope": ["*url*", "*link*", "*uri*"],
      "settings": {
        "fontStyle": "underline"
      }
    },
    {
      "name": "Decorators",
      "scope": [
        "tag.decorator.js entity.name.tag.js",
        "tag.decorator.js punctuation.definition.tag.js"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "${blue3}"
      }
    },
    {
      "name": "ES7 Bind Operator",
      "scope": [
        "source.js constant.other.object.key.js string.unquoted.label.js"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "${red2}"
      }
    },

    // #region JSON Keys
    {
      "name": "JSON Key - Level 0",
      "scope": [
        "source.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      "settings": {
        "fontStyle": "",
        "foreground": "${blue3}"
      }
    },
    {
      "name": "JSON Key - Level 1",
      "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      "settings": {
        "fontStyle": "",
        "foreground": "${blue4}"
      }
    },
    {
      "name": "JSON Key - Level 2",
      "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      "settings": {
        "fontStyle": "",
        "foreground": "${blue3}"
      }
    },
    {
      "name": "JSON Key - Level 3",
      "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      "settings": {
        "fontStyle": "",
        "foreground": "${blue4}"
      }
    },
    {
      "name": "JSON Key - Level 4",
      "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      "settings": {
        "fontStyle": "",
        "foreground": "${blue3}"
      }
    },
    {
      "name": "JSON Key - Level 5",
      "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      "settings": {
        "fontStyle": "",
        "foreground": "${blue4}"
      }
    },
    {
      "name": "JSON Key - Level 6",
      "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      "settings": {
        "fontStyle": "",
        "foreground": "${blue3}"
      }
    },
    {
      "name": "JSON Key - Level 7",
      "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      "settings": {
        "fontStyle": "",
        "foreground": "${blue4}"
      }
    },
    {
      "name": "JSON Key - Level 8",
      "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      "settings": {
        "fontStyle": "",
        "foreground": "${blue3}"
      }
    },
    // #endregion

    {
      "name": "Storage",
      "scope": "storage",
      "settings": {
        "fontStyle": "italic ",
        "foreground": "${red2}"
      }
    },
    {
      "name": "Class name",
      "scope": "entity.other.attribute-name",
      "settings": {
        "fontStyle": "underline",
        "foreground": "${green1}"
      }
    },
    {
      "name": "Inherited class",
      "scope": "entity.other.inherited-class",
      "settings": {
        "fontStyle": "italic underline",
        "foreground": "${green1}"
      }
    },
    {
      "name": "Function name",
      "scope": ["entity.name.function", "support.function"],
      "settings": {
        "fontStyle": "",
        "foreground": "${green2}"
      }
    },
    {
      "name": "Function argument",
      "scope": ["variable.parameter"],
      "settings": {
        "fontStyle": "italic",
        "foreground": "${yellow2}"
      }
    },
    {
      "name": "Library function",
      "scope": ["support.function"],
      "settings": {
        "fontStyle": "bold",
        "foreground": "${blue4}"
      }
    },
    {
      "name": "Invalid deprecated",
      "scope": "invalid.deprecated",
      "settings": {
        "foreground": "${white3}"
      }
    },
    {
      "name": "JSON String",
      "scope": "string.quoted.double.json",
      "settings": {
        "foreground": "${yellow2}",
        "fontStyle": " italic"
      }
    },

    // #region Diff
    {
      "name": "diff.header",
      "scope": ["meta.diff", "meta.diff.header"],
      "settings": {
        "foreground": "${gray4}"
      }
    },
    {
      "name": "diff.deleted",
      "scope": "markup.deleted",
      "settings": {
        "foreground": "${red2}"
      }
    },
    {
      "name": "diff.inserted",
      "scope": "markup.inserted",
      "settings": {
        "foreground": "${green1}"
      }
    },
    {
      "name": "diff.changed",
      "scope": "markup.changed",
      "settings": {
        "foreground": "${yellow2}"
      }
    },
    // #endregion

    // #region GitGutter
    {
      "name": "GitGutter deleted",
      "scope": "markup.deleted.git_gutter",
      "settings": {
        "foreground": "${red2}"
      }
    },
    {
      "name": "GitGutter inserted",
      "scope": "markup.inserted.git_gutter",
      "settings": {
        "foreground": "${green1}"
      }
    },
    {
      "name": "GitGutter changed",
      "scope": "markup.changed.git_gutter",
      "settings": {
        "foreground": "${yellow2}"
      }
    },
    {
      "name": "GitGutter ignored",
      "scope": "markup.ignored.git_gutter",
      "settings": {
        "foreground": "${gray4}"
      }
    },
    {
      "name": "GitGutter untracked",
      "scope": "markup.untracked.git_gutter",
      "settings": {
        "foreground": "${gray3}"
      }
    },
    // #endregion

    // #region Markdown Markup
    {
      "name": "Markdown - Plain",
      "scope": [
        "text.html.markdown",
        "punctuation.definition.list_item.markdown"
      ],
      "settings": {
        "foreground": "${white3}"
      }
    },
    {
      "name": "Markdown - Markup Raw Inline",
      "scope": ["text.html.markdown markup.inline.raw.markdown"],
      "settings": {
        "foreground": "${purple1}"
      }
    },
    {
      "name": "Markdown - Markup Raw Inline Punctuation",
      "scope": [
        "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown"
      ],
      "settings": {
        "foreground": "${gray4}"
      }
    },
    {
      "name": "Markdown - Heading",
      "scope": [
        "markdown.heading",
        "markup.heading | markup.heading entity.name",
        "markup.heading.markdown punctuation.definition.heading.markdown"
      ],
      "settings": {
        "foreground": "${green1}"
      }
    },
    {
      "name": "Markup - Italic",
      "scope": ["markup.italic"],
      "settings": {
        "fontStyle": "italic",
        "foreground": "${red1}"
      }
    },
    {
      "name": "Markup - Bold",
      "scope": ["markup.bold", "markup.bold string"],
      "settings": {
        "fontStyle": "bold",
        "foreground": "${red2}"
      }
    },
    {
      "name": "Markup - Bold-Italic",
      "scope": [
        "markup.bold markup.italic",
        "markup.italic markup.bold",
        "markup.quote markup.bold",
        "markup.bold markup.italic string",
        "markup.italic markup.bold string",
        "markup.quote markup.bold string"
      ],
      "settings": {
        "fontStyle": "bold",
        "foreground": "${red2}"
      }
    },
    {
      "name": "Markup - Underline",
      "scope": ["markup.underline"],
      "settings": {
        "fontStyle": "underline",
        "foreground": "${yellow2}"
      }
    },
    {
      "name": "Markdown - Blockquote",
      "scope": [
        "markup.quote punctuation.definition.blockquote.markdown"
      ],
      "settings": {
        "foreground": "${gray4}"
      }
    },
    {
      "name": "Markup - Quote",
      "scope": ["markup.quote"],
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "Markdown - Link",
      "scope": ["string.other.link.title.markdown"],
      "settings": {
        "foreground": "${blue3}"
      }
    },
    {
      "name": "Markdown - Link Description",
      "scope": ["string.other.link.description.title.markdown"],
      "settings": {
        "foreground": "${purple1}"
      }
    },
    {
      "name": "Markdown - Link Anchor",
      "scope": ["constant.other.reference.link.markdown"],
      "settings": {
        "foreground": "${yellow2}"
      }
    },
    {
      "name": "Markup - Raw Block",
      "scope": ["markup.raw.block"],
      "settings": {
        "foreground": "${purple1}"
      }
    },
    {
      "name": "Markdown - Raw Block Fenced",
      "scope": ["markup.raw.block.fenced.markdown"],
      "settings": {
        "foreground": "${alpha70}"
      }
    },
    {
      "name": "Markdown - Fenced Bode Block",
      "scope": ["punctuation.definition.fenced.markdown"],
      "settings": {
        "foreground": "${alpha70}"
      }
    },
    {
      "name": "Markdown - Fenced Bode Block Variable",
      "scope": [
        "markup.raw.block.fenced.markdown",
        "variable.language.fenced.markdown",
        "punctuation.section.class.end"
      ],
      "settings": {
        "foreground": "${white3}"
      }
    },
    {
      "name": "Markdown - Fenced Language",
      "scope": ["variable.language.fenced.markdown"],
      "settings": {
        "foreground": "${gray4}"
      }
    },
    {
      "name": "Markdown - Separator",
      "scope": ["meta.separator"],
      "settings": {
        "fontStyle": "bold",
        "foreground": "${gray4}"
      }
    },
    {
      "name": "Markup - Table",
      "scope": ["markup.table"],
      "settings": {
        "foreground": "${white3}"
      }
    },
    // #endregion

    {
      "scope": [
        "constant.numeric.line-number",
        "constant.numeric.line-number.find-in-files - match"
      ],
      "settings": {
        "foreground": "${purple2}"
      }
    },
    {
      "scope": "entity.name.filename.find-in-files",
      "settings": {
        "foreground": "${yellow1}"
      }
    }
  ]
}
`
}

module.exports = generate
