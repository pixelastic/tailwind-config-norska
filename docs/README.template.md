# `tailwind-config-norska`

This is the custom Tailwind config used by norska (my personal static website
generator). I chose to expose the full config as its own npm module so I could
more easily plug it into other projects that don't use norska.

## Why a custom config?

I love Tailwind, but the default config wasn't enough for my needs, so I decided
to tweak it until I was comfortable with it. This config suits my way of working
really well, but it might not suits yours.

In any case, this page will document the config so you can have a look at it,
maybe borrow some ideas, and will serve a great reference for myself.

## Generic changes

### Separator

The separator has been changed from `:` to `_` as I'm mostly working with `pug`
templates and `pug` does not allow `:` in class names. That means that you would
write `md_w-3` and not `md:w-3`.

### Spacing

Width, Height, Margin, Padding, Positioning and Borders all use the same scale.
Some values might not make sense in a specific context, but I found that sharing
the same scale would give more flexibility in how I could place things.

### Simpler classes

Some classes have been simplified. The `line-height` classes are available
through `.lh-XXX` instead of `.leading-XXX`. The `.bold`, `.no-bold`, `.strike`
and `.pointer` have been added.

Text color and font family can be applied without prefixes: `.red.arial` will
work.

### PurgeCSS

This config will generate **a lot** of classes. It is expected that `purgeCSS`
will be applied on the resulting HTML+CSS files to remove all unused CSS
classes.

## Theming

The default values of many parts have been updated. The following tables expose
all the theme values. In includes both Tailwind default value, custom values,
and new theming option added by custom plugins.

{{themes}}

## Variants

The following variants are updated compared to the default Tailwind config.

{{variants}}

## Custom classes

### Gradients

Background gradient to be applied using the `.bg-gradient-x` (for horizontal
gradient) and `.bg-gradient-y` (for vertical ones) classes. The start and end
color will be taken from the `.bg-gradient-from-XXX` and `.bg-gradient-to-XXX`
classes.

So `.bg-gradient-x.bg-gradient-from-red.bg-gradient-to-green` will generate and
horizontal gradient from red to green. If only one color is defined, the other
will fallback to `transparent`.

### Bullets

As default list items don't have any bullets, a specific `.bullet` class can be
used to prepend a `•` to an element.

It also includes the `.bullet-arrow` (>), `.bullet-cross` (✗) and
`.bullet-tick` (✓) variants, as well as numbered `.bullet-1` through
`.bullet-10`.

Bullet color can be changed with `.bullet-XXX` classes, where `XXX` is any
configured color.

### Debug

The `.debug` class is meant to be added to a parent element, and it will outline
it as well as each of its nested children. Each depth will be outlined in
a different color, allowing for quick identification of layout.

### Flexbox

This weird-looking classes are meant to be used to quickly define flexbox
context and element. Their naming is vim-inspired, meaning that each letter
stands for the first letter of a defining part of what they do.

For example, `.flrnw` means `Flex Row NoWrap`, whil `.flcw` stands for `Flex Column Wrap`.

Some classes are meant to be used on containers (like `.flrnw` or `.flc`), while
others should be used on children (like `.fln` or `.fla`). Of course, some
children can also themselves become flexbox context so you can write
`.fln.flrnw` (actually, I do that often).

The classes also come without the `.fl` prefix, for when you don't want to imply
`display: flex` (maybe because the element is hidden and will be set to display
flex only on a certain screen width).

Here is a recap of all the classes, explaining the idea behind them, and if they
should be applied on a parent or children.

| Name     | Acronym                         | Explanation                                              | Where    |
| -------- | ------------------------------- | -------------------------------------------------------- | -------- |
| `.flrnw` | Flex Row NoWrap                 | Row context that does not allow wrapping                 | Parent   |
| `.flrw`  | Flex Row Wrap                   | Row context that allows wrapping                         | Parent   |
| `.flcnw` | Flex Column NoWrap              | Column content that does not allow wrapping              | Parent   |
| `.flcw`  | Flex Column Wrap                | Column content that allows wrapping                      | Parent   |
| `.rnw`   | Row NoWrap                      | Same as `.flrnw`, but without `display: flex`            | Parent   |
| `.rw`    | Row Wrap                        | Same as `.flrw`, but without `display: flex`             | Parent   |
| `.cnw`   | Column NoWrap                   | Same as `.flcnw`, but without `display: flex`            | Parent   |
| `.cw`    | Column Wrap                     | Same as `.flcw`, but without `display: flex`             | Parent   |
| `.flc`   | Flex Center                     | Center horizontally and vertically all children elements | Parent   |
| `.flrch` | Flex Row Center Horizontally    | Center horizontally all elements of the row              | Parent   |
| `.flrcv` | Flex Row Center Vertically      | Center vertically all elements of the row                | Parent   |
| `.flcch` | Flex Column Center Horizontally | Center horizontally all elements of the column           | Parent   |
| `.flccv` | Flex Column Center Vertically   | Center vertically all elements of the column             | Parent   |
| `.flral` | Flex Row Align Left             | Align all children elements on the left of the row       | Parent   |
| `.flrar` | Flex Row Align Right            | Align all children elements on the right of the row      | Parent   |
| `.flcab` | Flex Column Align Bottom        | Align all children elements at the bottom of the column  | Parent   |
| `.flcat` | Flex Column Align Top           | Align all children elements at the top of the column     | Parent   |
| `.flspa` | Flex Space Around               | Set empty space around children elements                 | Parent   |
| `.flspb` | Flex Space Between              | Set empty space between children elements                | Parent   |
| `.fla`   | Flex auto                       | Element takes all available space                        | Children |
| `.fln`   | Flex none                       | Element only takes as much place as needed               | Children |

### Grayscale

The `.grayscale` class force and element to be displayed only in shades of black
and white. It comes with `.grayscale-1` and `.grayscale-2` which are more or
less strong. The default `.grayscale` is equal to `.grayscale-1`.
A `.grayscale-0` utility is also provided in case you need to overwrite it.

It internally uses a `filter` so might no work if other classes also define
a `filter` on it.

### Text Shadows

Shadows can be added to text using the `.text-shadow` class. Shadow color and
opacity can be modified with any color and opacity defined (for example,
`.text-shadow-blue.text-shadow-opacity-50p` will set the shadow to blue with an opacity
of 50%).

### Box Shadows

Shadows can be added to any block element using the `.shadow-X` classes. `X` is
a size, ranging from 1 to 5. Sizes `.shadow-01` and `.shadow-001` are also
availale for very subtle shadows and `.shadow-0` to remove all shadow
altogether.

Shadow color can be updated using `.shadow-{color}` classes, where `{color}` is
any color defined earlier.

### Transitions

Elements with a transition defined also have a default duration, delay and
easing function defined. Those can still be overwritten with the relevant
Tailwind classes.

### Animations

Custom animations can be defined in the `animationName` theme. They are then
available through the `.animation-{name}` classe. Delay, duration, easing,
looping and state (running/paused) can be configured with classes.

### Conditionals

The `.if` class and the `.then_` modifier can be used to toggle property based
on a page state. The `.if` should be applied to a checkbox or radio button, and
whenever it is checked, the `.then_` class will be applied to another element.

Combined with the default input/label relationship through `id` and `for`
attributes, it is possible to use a label element to toggle a state using an
invisible checkbox.

Example markup:

```pug
input.if#whatever(type="checkbox")
.hidden.then_block Hello!
label(for="whatever") Click me to toggle the content display
```

## Contribution

The `./docs` folder contains a test website that includes all the new classes.
You can run it with `yarn run docs:serve`.

Once the documentation website is served locally, you can run visual regression
tests with the `yarn run test:visual` command. It will take screenshots of each
page and compare them to reference screenshot taken earlier.

If there is any difference, a visual diff will be presented. If the changes are
expected (ie. you added a new feature or fixed a bug), run `yarn run
test:visual:approve` to update the reference screenshots.

Note that only the element with the `.screenshot` class will be compared. You
can add the `.screenshot-click` class on elements if you want to click on them
before the screenshot. Similarly you can add the `.screenshot-hover` element on
one element if you want to hover it before taking a screenshot. Note that only
one element can be hovered, but several elements can be clicked.
