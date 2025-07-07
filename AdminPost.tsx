import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, Search, Eye, EyeOff, Star, Calendar, Clock, AlertCircle } from 'lucide-react';
import { useSupabasePosts } from '../../hooks/useSupabasePosts';

const AdminPosts: React.FC = () => {
  const { posts, deletePost, updatePost, loading, error } = useSupabasePosts();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'published' | 'draft'>('all');
  const [deleting, setDeleting] = useState<string | null>(null);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = filterStatus === 'all' || 
      (filterStatus === 'published' && post.published) ||
      (filterStatus === 'draft' && !post.published);

    return matchesSearch && matchesStatus;
  });

  const handleDelete = async (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)) {
      setDeleting(id);
      try {
        const success = await deletePost(id);
        if (success) {
          alert('Post deleted successfully');
        } else {
          alert('Failed to delete post. Please try again.');
        }
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Failed to delete post. Please try again.');
      } finally {
        setDeleting(null);
      }
    }
  };

  const togglePublished = async (id: string, currentStatus: boolean) => {
    try {
      const updates = { 
        published: !currentStatus,
        published_at: !currentStatus ? new Date().toISOString() : null
      };
      
      await updatePost(id, updates);
    } catch (error) {
      console.error('Error updating post status:', error);
      alert('Failed to update post status. Please try again.');
    }
  };

  const toggleFeatured = async (id: string, currentStatus: boolean) => {
    try {
      await updatePost(id, { featured: !currentStatus });
    } catch (error) {
      console.error('Error updating featured status:', error);
      alert('Failed to update featured status. Please try again.');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">All Posts</h1>
          <p className="text-gray-600 mt-1">Manage your blog posts</p>
        </div>
        <Link
          to="/admin/posts/new"
          className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Post
        </Link>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
            <p className="text-red-700">{error}</p>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as 'all' | 'published' | 'draft')}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="all">All Posts ({posts.length})</option>
          <option value="published">Published ({posts.filter(p => p.published).length})</option>
          <option value="draft">Drafts ({posts.filter(p => !p.published).length})</option>
        </select>
      </div>

      {/* Posts Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Calendar className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchQuery || filterStatus !== 'all' ? 'No posts found' : 'No posts yet'}
            </h3>
            <p className="text-gray-600 mb-4">
              {searchQuery || filterStatus !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'Get started by creating your first blog post'
              }
            </p>
            {!searchQuery && filterStatus === 'all' && (
              <Link
                to="/admin/posts/new"
                className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create First Post
              </Link>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPosts.map(post => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-start">
                        <div className="flex-1">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900 mr-2">
                              {post.title}
                            </div>
                            {post.featured && (
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            )}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            {post.excerpt.substring(0, 100)}...
                          </div>
                          <div className="flex items-center mt-2 text-xs text-gray-400">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.reading_time} min read
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{post.author}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          post.published
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>
                        {post.published && post.published_at 
                          ? formatDate(post.published_at)
                          : formatDate(post.created_at)
                        }
                      </div>
                      {post.updated_at !== post.created_at && (
                        <div className="text-xs text-gray-400">
                          Updated {formatDate(post.updated_at)}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => togglePublished(post.id, post.published)}
                          className={`p-1 rounded hover:bg-gray-100 ${
                            post.published ? 'text-green-600' : 'text-gray-400'
                          }`}
                          title={post.published ? 'Unpublish' : 'Publish'}
                        >
                          {post.published ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                        </button>
                        
                        <button
                          onClick={() => toggleFeatured(post.id, post.featured)}
                          className={`p-1 rounded hover:bg-gray-100 ${
                            post.featured ? 'text-yellow-500' : 'text-gray-400'
                          }`}
                          title={post.featured ? 'Remove from featured' : 'Mark as featured'}
                        >
                          <Star className={`h-4 w-4 ${post.featured ? 'fill-current' : ''}`} />
                        </button>
                        
                        <Link
                          to={`/admin/posts/${post.id}/edit`}
                          className="p-1 text-indigo-600 hover:text-indigo-900 rounded hover:bg-gray-100"
                          title="Edit post"
                        >
                          <Edit className="h-4 w-4" />
                        </Link>
                        
                        <button
                          onClick={() => handleDelete(post.id, post.title)}
                          disabled={deleting === post.id}
                          className="p-1 text-red-600 hover:text-red-900 rounded hover:bg-gray-100 disabled:opacity-50"
                          title="Delete post"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Summary */}
      {filteredPosts.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredPosts.length} of {posts.length} posts
        </div>
      )}
    </div>
  );
};

export default AdminPosts;
