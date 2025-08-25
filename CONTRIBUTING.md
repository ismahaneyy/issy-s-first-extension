# Contributing to Issy Blog Extension

Thank you for your interest in contributing to the Issy Blog Extension! This document provides guidelines and information for contributors.

## How to Contribute

We welcome contributions from the community! Whether you're fixing a bug, adding a feature, or improving documentation, your help is appreciated.

### Types of Contributions

- **Bug Fixes** - Help us squash bugs and improve stability
- **New Features** - Add functionality that enhances the user experience
- **Documentation** - Improve README, code comments, or API documentation
- **Tests** - Add or improve test coverage
- **Code Quality** - Refactor code, improve performance, or fix linting issues
- **Localization** - Add support for additional languages

## Getting Started

### Prerequisites

Before contributing, ensure you have:

- **Node.js** 18.0.0 or higher
- **VS Code** 1.103.0 or higher
- **Git** for version control
- **npm** 8.0.0 or higher

### Development Environment Setup

1. **Fork the Repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/issy-s-first-extension.git
   cd issy-s-first-extension
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Verify Setup**
   ```bash
   # Run linting
   npm run lint
   
   # Run tests
   npm test
   
   # Launch extension in development mode
   F5
   ```

## Development Workflow

### 1. Create a Feature Branch

Always work on a feature branch, never directly on `main`:

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/your-bug-description
```

### 2. Make Your Changes

Follow these guidelines while coding:

#### Code Style Guidelines

- **JavaScript Standards**: Follow ES2022 standards
- **Indentation**: Use 4 spaces (no tabs)
- **Line Length**: Keep lines under 100 characters
- **Naming**: Use descriptive variable and function names
- **Comments**: Add JSDoc comments for public functions

#### VS Code Extension Best Practices

- **Error Handling**: Always include try-catch blocks for async operations
- **User Feedback**: Provide clear error messages and loading indicators
- **Performance**: Minimize API calls and optimize data processing
- **Accessibility**: Ensure extensions work with screen readers

#### Example Code Structure

```javascript
/**
 * Fetches articles from RSS feed with error handling
 * @param {string} url - RSS feed URL
 * @returns {Promise<Array>} Array of parsed articles
 */
async function fetchArticles(url) {
    try {
        const response = await axios.get(url);
        return parseRssFeed(response.data);
    } catch (error) {
        console.error('Failed to fetch articles:', error);
        throw new Error('Unable to fetch articles. Please try again.');
    }
}
```

### 3. Testing Your Changes

Before submitting, ensure your changes work correctly:

```bash
# Run linting to check code quality
npm run lint

# Run tests to ensure nothing is broken
npm test

# Test the extension manually
F5  # Launch Extension Development Host
```

### 4. Commit Your Changes

Use conventional commit messages:

```bash
# Format: type(scope): description
git commit -m "feat(api): add caching for RSS feed requests"
git commit -m "fix(ui): resolve QuickPick menu display issue"
git commit -m "docs(readme): update installation instructions"
```

**Commit Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### 5. Push and Create Pull Request

```bash
# Push your branch to your fork
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:

- **Clear title** describing the change
- **Detailed description** of what was changed and why
- **Screenshots** if UI changes were made
- **Test results** showing everything passes

## Pull Request Guidelines

### Before Submitting

- [ ] Code follows the style guidelines
- [ ] All tests pass (`npm test`)
- [ ] Linting passes (`npm run lint`)
- [ ] Documentation is updated if needed
- [ ] Changes are tested manually in VS Code

### Pull Request Template

```markdown
## Description
Brief description of the changes made.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] Manual testing completed
- [ ] All existing tests pass
- [ ] New tests added for new functionality

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
```

## Reporting Bugs

### Before Reporting

1. **Check existing issues** to avoid duplicates
2. **Test with latest version** of the extension
3. **Try in a clean VS Code instance**

### Bug Report Template

```markdown
## Bug Description
Clear and concise description of the bug.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What you expected to happen.

## Actual Behavior
What actually happened.

## Environment
- VS Code Version: [e.g., 1.103.0]
- Extension Version: [e.g., 0.0.1]
- OS: [e.g., Windows 10, macOS 12.0, Ubuntu 20.04]
- Node.js Version: [e.g., 18.0.0]

## Additional Context
Any other context about the problem.
```

## Feature Requests

### Before Requesting

1. **Check existing issues** for similar requests
2. **Consider the scope** - is it within the extension's purpose?
3. **Think about implementation** - how would it work?

### Feature Request Template

```markdown
## Feature Description
Clear and concise description of the feature.

## Problem Statement
What problem does this feature solve?

## Proposed Solution
How would you like this feature to work?

## Alternative Solutions
Any alternative solutions you've considered.

## Additional Context
Any other context or screenshots about the feature request.
```

## Architecture Guidelines

### Extension Structure

- **Keep it modular** - Separate concerns into different functions
- **Error handling** - Always handle potential failures gracefully
- **Performance** - Consider memory usage and execution time
- **User experience** - Provide clear feedback and loading states

### API Integration

- **Rate limiting** - Respect API rate limits
- **Caching** - Cache responses when appropriate
- **Error recovery** - Implement retry logic for transient failures
- **Fallbacks** - Provide alternative behavior when APIs are unavailable

## Code Review Process

### Review Checklist

- [ ] **Functionality** - Does the code work as intended?
- [ ] **Performance** - Are there any performance implications?
- [ ] **Security** - Are there any security concerns?
- [ ] **Maintainability** - Is the code easy to understand and maintain?
- [ ] **Testing** - Are there adequate tests?
- [ ] **Documentation** - Is the code well-documented?

### Review Guidelines

- **Be constructive** - Provide helpful feedback
- **Be specific** - Point to exact lines or sections
- **Suggest alternatives** - Offer better approaches when possible
- **Ask questions** - Clarify unclear code or decisions

## Community Guidelines

### Code of Conduct

- **Be respectful** - Treat all contributors with respect
- **Be inclusive** - Welcome contributors from all backgrounds
- **Be helpful** - Help others learn and grow
- **Be patient** - Remember that everyone is learning

### Communication

- **Use clear language** - Write clearly and concisely
- **Be specific** - Provide specific examples and details
- **Ask questions** - Don't hesitate to ask for clarification
- **Share knowledge** - Help others understand your contributions


## 🙏 Recognition

Contributors will be recognized in:

- **README.md** - List of contributors
- **Release notes** - Credit for significant contributions
- **GitHub contributors** - Automatic recognition through GitHub

---

**Thank you for contributing to the VS Code community!** 


