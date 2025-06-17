#==============================================================================
#  Window Manager
#  Version: 1.0
#  Author: TDRP
#==============================================================================
#  About and usage of module
#==============================================================================
#  This custom module allows you to create and remove windows containing text
#  on any part of the game window.
#
#  WARNING: This script isn't recommended to be used by developers of other
#           scripts! Please, for the love of anything, make your own windows
#           instead of using my bad script.
#
#==============================================================================
#  TDRP_WindowManager.create_window(:id, "message", x, y)
#
#  :id (Symbol) - This is the ID for your window. You HAVE to put a colon. (:)
#  message (String) - This is the text inside your window.
#  x (Integer) - The position of your window horizontally in pixels.
#  y (Integer) - The position of your window vertically in pixels.
#
#  This script call creates a new window.
#
#  Example usage: TDRP_WindowManager.create_window(:greeting, "Howdy!", 0, 0)
#==============================================================================
#  TDRP_WindowManager.dispose_window(:id)
#
#  :id (Symbol) - The ID of your window.
#
#  This script call removes an existing window.
#
#  Example usage: TDRP_WindowManager.dispose_window(:greeting)
#==============================================================================
#  TDRP_WindowManager.dispose_all
#
#  Removes all created windows.
#==============================================================================
#
#  You don't have to give me credit for this script! :D
#  
#==============================================================================
#  Want to get more of my scripts?
#==============================================================================
#  Go to 'https://tdrbot.github.io/rgss3' to find more of my scripts!
#
#  If you found this script claimed to be owned by someone else, please report
#  it to me, thanks a bunch! :D
#==============================================================================

module TDRP_WindowManager
  @windows = {}

  class << self
    def create_window(id, text, x, y, width = 400, height = 75)
      dispose_window(id) if @windows[id]

      win = Window_Base.new(x, y, width, height)
      win.contents = Bitmap.new(width - 32, height - 32)
      win.contents.draw_text(0, 0, width - 32, height - 32, text.to_s)
      @windows[id] = win
    end

    def dispose_window(id)
      return unless @windows[id]
      @windows[id].dispose
      @windows.delete(id)
    end

    def dispose_all
      @windows.each_value(&:dispose)
      @windows.clear
    end
  end
end