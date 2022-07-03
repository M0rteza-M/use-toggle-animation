export default function useToggleAnimation (settings: {message?: string} = {}) {
  const { message } = settings;
  return {
    message
  };
}