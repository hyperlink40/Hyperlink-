# blog

## Usage

To use this project, clone the repository and open the `blog.html` file in your web browser. Make sure all related files are in the same directory.

```
git clone <repository-url>
cd Hyperlink-
open blog.html
```

Replace `<repository-url>` with the actual URL of your repository.

## Admin Post Upload

### How Admins Upload Posts
1. Click the **Admin Login** button in the header.
2. Enter the admin password (default: `admin123`).
3. The Admin Dashboard will appear.
4. Use the form to enter the post title, content, and optionally upload images or videos.
5. Click **Save Post** to upload. The post will appear in the blog list.

Admins can also edit or delete posts from the dashboard. Password can be changed in the dashboard.

### Implementation Notes
- Admin authentication is handled in-browser using localStorage for the password.
- Posts (including media) are stored in the browser's localStorage.
- The upload form supports multiple images and videos per post.
- No server is required; all data is local to the user's browser.
- For production, consider adding server-side storage and authentication for better security.
