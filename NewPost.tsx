import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from '../../components/Admin/PostForm';
import { useSupabasePosts } from '../../hooks/useSupabasePosts';
import { PostInsert } from '../../types/database';

const NewPost: React.FC = () => {
  const navigate = useNavigate();
  const { addPost, isSlugUnique } = useSupabasePosts();

  const handleSave = async (postData: PostInsert) => {
    try {
      // Check if slug is unique
      const slugUnique = await isSlugUnique(postData.slug);
      if (!slugUnique) {
        // Append timestamp to make slug unique
        postData.slug = `${postData.slug}-${Date.now()}`;
      }

      const newPost = await addPost(postData);
      
      if (newPost) {
        // Show success message
        if (postData.published) {
          alert(`Post "${newPost.title}" has been published successfully!`);
        } else {
          alert(`Post "${newPost.title}" has been saved as draft.`);
        }
        
        navigate('/admin/posts');
      } else {
        throw new Error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post. Please try again.');
    }
  };

  const handleCancel = () => {
    const confirmLeave = window.confirm(
      'Are you sure you want to leave? Any unsaved changes will be lost.'
    );
    
    if (confirmLeave) {
      navigate('/admin/posts');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PostForm
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default NewPost;
