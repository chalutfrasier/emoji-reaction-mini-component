# emoji-reaction-mini-component

A simple React component for displaying emoji reactions.

## Installation

```bash
npm install emoji-reaction-mini-component
```

## Usage

```javascript
import React from 'react';
import EmojiReactionMiniComponent from 'emoji-reaction-mini-component';

const MyComponent = () => {
  const reactions = ['👍', '❤️', '😄', '😢', '😡'];

  const handleReactionChange = (reaction) => {
    console.log('Selected reaction:', reaction);
// Handle reaction change logic here
  };

  return (
    <div>
      <h2>Emoji Reactions</h2>
      <EmojiReactionMiniComponent
        reactions={reactions}
        onReactionChange={handleReactionChange}
      />
    </div>
  );
};

export default MyComponent;
```

## Props

- `reactions`: An array of emoji reactions to display.
- `onReactionChange`: A function to be called when a reaction is selected. It receives the selected reaction as an
  argument.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
