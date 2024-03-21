import React, { useState } from 'react';

const EmojiReactionMiniComponent = ({ reactions, onReactionChange }) => {
  const [selectedReaction, setSelectedReaction] = useState(null);

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction);
    if (onReactionChange) {
      onReactionChange(reaction);
    }
  };

  return (
    <div className="emoji-reaction-mini-component">
      {reactions.map((reaction, index) => (
        <span
          key={index}
          className={`emoji-reaction-mini-component__reaction ${
            selectedReaction === reaction ? 'selected' : ''
          }`}
          onClick={() => handleReactionClick(reaction)}
        >
          {reaction}
        </span>
      ))}
    </div>
  );
};

export default EmojiReactionMiniComponent;
