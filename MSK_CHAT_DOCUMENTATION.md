# MSK Chat - Intelligent Assistant Documentation

## 🤖 Overview

**MSK Chat** is an enhanced intelligent chatbot assistant for the Mobilizing Subjugated Knowledges (MSK) Niagara Research Partnership website. It provides comprehensive, context-aware responses to user queries about the research partnership, team, projects, and community engagement opportunities.

## ✨ Key Features

### 1. **Comprehensive Knowledge Base**
- **Research Hubs**: Detailed information about all 3 research hubs
- **Team Members**: Information about 45+ team members and leadership
- **Community Partners**: Details about YWCA, Migrant Farmworkers Project, and other partners
- **Research Projects**: Active projects, methodology, and findings
- **Governance**: Implementation Council structure and decision-making
- **Timeline & Events**: Partnership history and upcoming opportunities
- **Publications**: Knowledge dissemination and academic outputs
- **Get Involved**: Partnership and collaboration opportunities

### 2. **Bilingual Support**
- **Full English/French Support**: All responses available in both languages
- **Automatic Language Detection**: Responds in user's selected language
- **Consistent Translations**: Professionally translated content
- **Multilingual Research Info**: Details about English, French, Spanish research

### 3. **Enhanced Intelligence**
- **Smart Pattern Matching**: Understands various question formats
- **Context-Aware Responses**: Provides relevant, detailed answers
- **Topic Detection**: Recognizes 15+ topic categories
- **Helpful Suggestions**: Guides users to relevant information
- **Natural Conversation Flow**: Feels like talking to a real person

### 4. **Professional Design**
- **Black, White & Dark Red Theme**: Matches new website color scheme
- **Gradient Effects**: Modern visual design with dark red gradients
- **Smooth Animations**: Fade-in effects and smooth transitions
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Accessible Interface**: High contrast, keyboard navigation, screen reader friendly

## 🎨 Design Specifications

### Color Palette
```css
Primary Red:    #8B0000 (Dark Red)
Hover Red:      #A40000 (Lighter Dark Red)
Deep Red:       #6B0000 (Darker Red)
Black:          #0A0A0A (Text & Dark Backgrounds)
White:          #FFFFFF (Backgrounds & Light Text)
Light Gray:     #F5F5F5 (Subtle Backgrounds)
```

### Visual Elements
- **Chat Button**: Dark red circular button with pulsing indicator
- **Header**: Dark red gradient with AI badge
- **Bot Avatar**: Dark red gradient circle with Sparkles icon
- **User Avatar**: Black gradient circle with User icon
- **Bot Messages**: White background with dark red accent border
- **User Messages**: Dark red gradient background with white text
- **Quick Replies**: Dark red outlined buttons
- **Typing Indicator**: Animated dark red dots

## 📚 Topic Coverage

MSK Chat can intelligently respond to questions about:

### Research & Academic
1. **Research Hubs** (3 hubs with detailed descriptions)
   - Childhood & Growing Up Hub
   - Health Literacy Hub
   - Identity, Connections & Belonging Hub

2. **Research Projects**
   - Active projects overview
   - Methodology (participatory action research)
   - Multilingual approach

3. **Publications & Dissemination**
   - Academic outputs
   - Community reports
   - Knowledge mobilization

### People & Partnerships
4. **Team Members** (45+ members)
   - Co-Directors
   - Researchers & Faculty
   - Students & Research Assistants
   - Community Leaders

5. **Community Partners**
   - YWCA Niagara Region
   - Migrant Farmworkers Project
   - Additional partners

6. **Governance Structure**
   - Implementation Council
   - Decision-making process
   - Rotating membership

### Engagement & Information
7. **Get Involved**
   - Partnership opportunities
   - Research participation
   - Student opportunities
   - Community engagement

8. **Contact Information**
   - How to reach the team
   - Location details
   - Response times

9. **Timeline & Events**
   - Partnership history
   - Upcoming events
   - Regular activities

10. **Mission & Values**
    - Social justice focus
    - Community-based approach
    - SSHRC funding

### Specialized Topics
11. **SSHRC Funding**
12. **Multilingual Approach**
13. **Niagara Region Focus**
14. **About MSK**

## 🔍 Pattern Recognition

MSK Chat uses advanced pattern matching to understand user intent:

### Greeting Patterns
```javascript
/^(hi|hello|hey|bonjour|salut|good morning|good afternoon)/i
```

### Topic-Specific Patterns
- **Hubs**: hub, pôle, childhood, enfance, health, identity
- **Team**: team, member, researcher, équipe, chercheur
- **Partners**: partner, community, ywca, migrant, partenaire
- **Projects**: project, research, study, projet, recherche
- **Involvement**: involve, join, participate, collaborate
- **Contact**: contact, email, phone, reach, contacter
- **Timeline**: timeline, event, history, when, événement
- **Mission**: mission, about, purpose, goal, objectif

### Context-Aware Responses
- Detects follow-up questions
- Provides detailed vs. overview responses
- Suggests related topics
- Offers actionable next steps

## 💬 Quick Reply Options

Pre-configured quick reply buttons for common topics:

**English:**
1. Research Hubs
2. Our Mission
3. Get Involved
4. Team & Partners

**French:**
1. Pôles de recherche
2. Notre mission
3. Participer
4. Équipe & Partenaires

## 📱 User Interface Components

### Chat Button (Floating)
- **Position**: Fixed bottom-right (24px from edges)
- **Size**: 56x56px (including 16px padding)
- **Color**: Dark red (#8B0000) with white icon
- **Effects**: Hover scale (110%), shadow glow, pulsing online indicator
- **Icon**: MessageCircle (open) / X (close)

### Chat Window
- **Size**: 384px wide × 600px tall (responsive on mobile)
- **Position**: Bottom-right, above chat button
- **Border**: 2px dark red border with 20% opacity
- **Shadow**: Elevated shadow for depth
- **Border Radius**: 16px (rounded)

### Header Section
- **Background**: Dark red gradient (from #8B0000 to #6B0000)
- **Content**: AI badge, bot avatar, status indicator
- **Height**: Auto (with 16px padding)

### Messages Section
- **Background**: Gradient from light gray to white
- **Scrolling**: Auto-scroll to latest message
- **Padding**: 16px
- **Gap**: 16px between messages

### Quick Replies Section
- **Visibility**: Shows only after welcome message
- **Layout**: Flex wrap with 8px gaps
- **Buttons**: Outlined dark red, rounded-full

### Input Section
- **Border**: 2px top border with dark red accent
- **Input Field**: Rounded-full, 2px border, focus ring
- **Send Button**: Gradient dark red, circular, disabled state
- **Branding**: "Powered by MSK AI" footer text

## ⚙️ Technical Implementation

### State Management
```typescript
const [isOpen, setIsOpen] = useState(false);           // Chat window visibility
const [messages, setMessages] = useState<Message[]>([]);  // Message history
const [inputValue, setInputValue] = useState('');      // Current input
const [isTyping, setIsTyping] = useState(false);       // Bot typing indicator
```

### Message Structure
```typescript
interface Message {
  id: string;           // Unique timestamp-based ID
  text: string;         // Message content
  sender: 'user' | 'bot';  // Message sender
  timestamp: Date;      // Creation timestamp
}
```

### Response Generation
```typescript
getBotResponse(userMessage: string): string
```
- Takes user message as input
- Applies pattern matching
- Returns contextually appropriate response
- Language-aware (English/French)

### Typing Simulation
- **Delay**: 800-1500ms (randomized for realism)
- **Indicator**: 3 animated dots in bot avatar
- **Effect**: Shows bot is "thinking"

## 🌐 Accessibility Features

### Keyboard Navigation
- **Tab**: Navigate between input and send button
- **Enter**: Send message
- **Esc**: Close chat (could be implemented)

### Screen Reader Support
- **ARIA Labels**: "Toggle MSK Chat", "Send message"
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: Descriptive icon labels

### Visual Accessibility
- **High Contrast**: WCAG AAA compliant
- **Large Touch Targets**: 44×44px minimum
- **Focus Indicators**: Clear focus rings
- **Readable Text**: 14px+ font sizes

## 📊 Response Quality

### Comprehensive Answers
Each response includes:
- **Emoji Icons**: Visual categorization (🔬📚👥🤝)
- **Structured Content**: Bullet points, numbering, sections
- **Key Details**: Names, numbers, specifics
- **Action Items**: Next steps, links, suggestions
- **Context**: Why it matters, impact, benefits

### Response Length
- **Short**: Greetings, thanks, bye (50-100 words)
- **Medium**: Topics overview (100-200 words)
- **Long**: Detailed explanations (200-400 words)

### Tone & Voice
- **Professional**: Academic yet approachable
- **Friendly**: Warm, welcoming, encouraging
- **Helpful**: Actionable information
- **Inclusive**: Respectful of diversity

## 🚀 Performance

### Optimization
- **Lazy Loading**: Chat only loads when opened
- **Efficient Rendering**: React hooks for optimal updates
- **Minimal Re-renders**: UseRef for DOM elements
- **Auto-scroll**: Smooth scrolling to latest message

### Bundle Size
- **Components**: ~15KB (minified)
- **Icons**: Lucide React (tree-shaken)
- **No External AI**: All responses pre-programmed

## 🔮 Future Enhancements

Potential improvements for MSK Chat:

1. **Advanced NLP**: Integration with GPT/Claude for dynamic responses
2. **Search Integration**: Link to website search results
3. **Rich Media**: Embed images, videos, PDFs in responses
4. **Conversation History**: Save chat history across sessions
5. **Analytics**: Track popular questions, satisfaction
6. **Voice Support**: Text-to-speech, speech-to-text
7. **Multi-turn Conversations**: Remember context across messages
8. **Suggested Questions**: Show related questions after each response
9. **Feedback System**: Like/dislike buttons for responses
10. **Live Chat Handoff**: Escalate to human support

## 📝 Content Maintenance

### Adding New Topics
1. Add pattern in `getBotResponse()` function
2. Create response text for both languages
3. Test pattern matching
4. Update documentation

### Updating Existing Content
1. Locate response in `responses.en` or `responses.fr`
2. Update text while maintaining structure
3. Verify emoji usage
4. Test in both languages

### Translation Guidelines
- Maintain emoji positioning
- Keep bullet point structure
- Preserve action items
- Match tone and formality
- Test readability

## 🎯 Best Practices

### For Developers
- Keep responses concise but informative
- Use emoji sparingly for visual hierarchy
- Maintain consistent formatting
- Test all pattern matches
- Ensure bilingual parity

### For Content Writers
- Write in plain language
- Include actionable information
- Use active voice
- Be welcoming and inclusive
- Proofread thoroughly

### For Users
- Ask clear, specific questions
- Use keywords from topic areas
- Try different phrasings if needed
- Explore quick reply options
- Switch language if preferred

## 📞 Support & Feedback

For issues, suggestions, or contributions to MSK Chat:
- Review the codebase in `/src/app/components/Chatbot.tsx`
- Test thoroughly in both English and French
- Maintain the black, white, and dark red color scheme
- Follow accessibility guidelines
- Document all changes

---

**Version**: 3.0 - Enhanced MSK Chat  
**Last Updated**: January 2026  
**Maintained By**: MSK Development Team  
**License**: Proprietary - MSK Niagara Research Partnership
