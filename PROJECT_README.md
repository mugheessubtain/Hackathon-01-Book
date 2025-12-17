# Physical AI Textbook Platform

> A comprehensive educational platform for learning robotics and physical AI with interactive RAG-powered chatbot support and multi-language accessibility.

## 🌟 Overview

The Physical AI Textbook Platform is a modern, interactive learning environment that combines cutting-edge web technologies with AI-powered assistance to teach robotics fundamentals. Built using Docusaurus 3, this platform features a complete curriculum covering ROS 2, simulation, NVIDIA Isaac, and Vision-Language-Action (VLA) models.

### Key Features

- 📚 **Comprehensive Curriculum**: 4 modules covering the complete robotics stack
- 🌍 **Multi-Language Support**: English, French, Arabic, and Urdu with RTL support
- 🤖 **AI-Powered Chatbot**: RAG-enabled tutor with context-aware responses
- 🎯 **Interactive Learning**: Hands-on projects and practical exercises
- ♿ **Accessibility**: WCAG 2.1 AA compliant with skip navigation and ARIA labels
- 📱 **Responsive Design**: Modern UI with custom design system

## 🏗️ Architecture

### Frontend (Docusaurus)
```
book/
├── docs/                           # Main content (English)
├── i18n/                          # Internationalization files
│   ├── fr/ ar/ ur/               # Translated content
├── src/
│   ├── components/ChatWidget/     # AI chatbot component
│   ├── css/                      # Custom styles + RTL support
│   └── theme/                    # Custom theme components
└── docusaurus.config.js          # Multi-locale configuration
```

### Backend API (FastAPI)
```
api/
├── main.py                       # FastAPI application entry
├── routers/chat.py              # Chat endpoint with CORS
├── services/                    # Core services
│   ├── rag_service.py          # Retrieval-Augmented Generation
│   ├── vector_service.py       # Qdrant vector database
│   └── gemini_service.py       # Google Gemini AI
├── models/                     # Pydantic models
└── db/                         # Database utilities
```

### Data Pipeline
```
scripts/
├── index_content.py           # Content ingestion to Qdrant
└── seed_db.py                # Database initialization
```

## 🚀 Quick Start

### Prerequisites
- **Node.js**: v18+ (tested with v24.11.0)
- **Python**: 3.8+ (tested with 3.13)
- **Git**: For version control

### 1. Clone & Install
```bash
git clone https://github.com/Kalhanzdev/hackathon1-book-with-rag-using-SDD.git
cd hackathon1-book-with-rag-using-SDD

# Install frontend dependencies
cd book && npm install

# Install backend dependencies  
cd ../api && pip install -r requirements.txt
```

### 2. Environment Configuration
Copy `.env.example` to `.env` and configure:

```bash
# === Database Configuration ===
DATABASE_URL=postgresql://your_neon_connection_string

# === Vector Database (Qdrant Cloud) ===
QDRANT_URL=https://your-qdrant-cluster-url
QDRANT_API_KEY=your_qdrant_api_key
QDRANT_COLLECTION_NAME=textbook_chunks

# === AI Services (Google Gemini) ===
GEMINI_API_KEY=your_gemini_api_key
GEMINI_EMBEDDING_MODEL=text-embedding-004
GEMINI_CHAT_MODEL=gemini-2.5-flash

# === CORS Configuration ===
CORS_ORIGINS=http://localhost:3000,http://localhost:3001
```

### 3. Data Ingestion
```bash
# Index content for RAG search
python scripts/index_content.py

# Initialize database (optional)
python scripts/seed_db.py
```

### 4. Run Development Servers
```bash
# Terminal 1: Backend API
uvicorn api.main:app --host 0.0.0.0 --port 8000 --reload

# Terminal 2: Frontend (Development)
cd book && npm run start

# OR: Frontend (Production Build)
cd book && npm run build && npx docusaurus serve --port 3001
```

### 5. Access the Platform
- **English**: http://localhost:3000/
- **French**: http://localhost:3000/fr/
- **Arabic**: http://localhost:3000/ar/ (RTL)
- **Urdu**: http://localhost:3000/ur/ (RTL)
- **API Docs**: http://localhost:8000/docs

## 📖 Curriculum Overview

### Module 1: ROS 2 Fundamentals (5 Weeks)
- Introduction to ROS 2
- Nodes and Topics (Pub/Sub)
- Services (Request/Response)
- Actions (Long-running tasks)
- Launch Files (System orchestration)

### Module 2: Robot Simulation (2 Weeks)
- Gazebo simulator basics
- URDF robot modeling

### Module 3: NVIDIA Isaac Platform (3 Weeks)
- Isaac ecosystem introduction
- Isaac Sim for photorealistic simulation
- Isaac Lab for RL training

### Module 4: Vision-Language-Action Models (3 Weeks)
- Vision models for perception
- Language models for commands
- End-to-end VLA integration

## 🤖 RAG Chatbot Features

The AI tutor chatbot provides contextual assistance using:

### Technology Stack
- **Vector Database**: Qdrant Cloud for semantic search
- **Embeddings**: Google Gemini `text-embedding-004`
- **Chat Model**: Google Gemini `gemini-2.5-flash`
- **Search Strategy**: Hybrid semantic + keyword search

### Capabilities
- 📝 **Context-Aware**: Searches relevant textbook content
- 🌐 **Multi-Language**: Responds in user's preferred language
- 📍 **Source Citations**: Links to specific course sections
- 💬 **Conversation Memory**: Maintains session context
- 🚀 **Real-time**: Sub-second response times

### Usage
1. Click the chat icon (bottom-right corner)
2. Ask questions in any supported language
3. Receive contextual answers with source links
4. Follow up with related questions

## 🌍 Internationalization

### Supported Languages
| Language | Code | Direction | Status |
|----------|------|-----------|--------|
| English  | `en` | LTR       | ✅ Complete |
| French   | `fr` | LTR       | ✅ Complete |
| Arabic   | `ar` | RTL       | ✅ Complete |
| Urdu     | `ur` | RTL       | ✅ Complete |

### Translation Coverage
- ✅ **Navigation**: Header, footer, sidebar
- ✅ **Content**: All modules and chapters
- ✅ **UI Components**: Chat widget, buttons, labels
- ✅ **Accessibility**: ARIA labels, skip navigation

### RTL Support
- CSS transforms for Arabic/Urdu
- Proper text alignment and reading flow
- Navbar and sidebar adaptations
- Code blocks remain LTR

## 🎨 Design System

### CSS Architecture
- **CSS Custom Properties**: Centralized theming
- **Component Modules**: Scoped styles
- **Dark Mode**: Full theme support
- **Responsive**: Mobile-first design

### Key Components
- `ChatWidget`: AI tutor interface with gradient header
- `SkipToContent`: Accessibility navigation
- Custom navigation with locale dropdown
- Enhanced code blocks with syntax highlighting

## 🔒 Security & Performance

### Security Features
- CORS configuration for safe API access
- Environment variable protection
- Input validation and sanitization
- Rate limiting ready (not implemented)

### Performance Optimizations
- Static site generation (SSG)
- Code splitting and lazy loading
- Vector search caching
- Optimized bundle sizes

## 📊 Monitoring & Logging

### Backend Logging
- Structured logging with timestamps
- Request/response tracking
- Error handling with stack traces
- Database connection monitoring

### Frontend Analytics
- Docusaurus built-in analytics ready
- User interaction tracking capability
- Language preference analytics

## 🚀 Deployment

### Production Checklist
- [ ] Environment variables configured
- [ ] Database connections verified
- [ ] Vector database indexed
- [ ] Build passes for all locales
- [ ] CORS origins updated for production
- [ ] SSL certificates configured

### GitHub Pages Deployment
```bash
# Set environment variables in .env
GIT_USER=yourusername
DEPLOYMENT_BRANCH=gh-pages

# Deploy
cd book && npm run deploy
```

### Docker Deployment (Future)
Container configuration ready for:
- Multi-stage builds
- Production optimization
- Environment-based configuration

## 🛠️ Development

### Project Structure
```
├── api/                     # FastAPI backend
├── book/                    # Docusaurus frontend
├── scripts/                 # Data processing utilities
├── specs/                   # Technical specifications
├── history/                 # Decision records and prompts
├── .env                     # Environment configuration
├── docker-compose.yml       # Container orchestration
└── PROJECT_README.md        # This file
```

### Code Standards
- **Python**: PEP 8, type hints, async/await
- **JavaScript/TypeScript**: ESLint, Prettier
- **CSS**: BEM methodology, custom properties
- **Markdown**: CommonMark with MDX extensions

### Testing Strategy
- Unit tests for API services
- Integration tests for RAG pipeline
- End-to-end tests for user workflows
- Accessibility testing (manual/automated)

## 📈 Metrics & Analytics

### Technical Metrics
- Build time: ~2 minutes for all locales
- Bundle size: Optimized for performance
- API response time: <1s for chat queries
- Uptime: 99.9% target

### Educational Metrics
- Content coverage: 13 weeks of curriculum
- Languages supported: 4 locales
- Accessibility: WCAG 2.1 AA compliant
- User engagement: Chat interactions tracked

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Content Guidelines
- Follow existing module structure
- Include practical exercises
- Maintain translation consistency
- Test all code examples

## 📚 Resources

### Technical Documentation
- [Docusaurus Documentation](https://docusaurus.io/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Qdrant Documentation](https://qdrant.tech/documentation/)
- [Google Gemini API](https://ai.google.dev/docs)

### Educational Resources
- [ROS 2 Documentation](https://docs.ros.org/)
- [Gazebo Documentation](https://gazebosim.org/docs)
- [NVIDIA Isaac Documentation](https://docs.omniverse.nvidia.com/isaacsim/)

## 🐛 Troubleshooting

### Common Issues
1. **Build Failures**: Check Node.js version (requires 18+)
2. **API Errors**: Verify environment variables and database connections
3. **CORS Issues**: Ensure localhost URLs in CORS_ORIGINS
4. **Translation Missing**: Run `npm run build` to verify all locales

### Support
- Open an issue on GitHub
- Check existing documentation
- Review logs for error details

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Docusaurus Team**: For the excellent documentation platform
- **Google AI**: For Gemini API access
- **Qdrant**: For vector database services
- **Open Source Community**: For the amazing tools and libraries

---

**Built with ❤️ for the Physical AI education community**

*Version: 1.0.0 | Last Updated: December 2025*