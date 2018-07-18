using System;

namespace PromizzApp.Domain
{
    public class History
    {
        public int Id { get; set; }
        public HistoryActionType ActionType { get; set; }
        public User ActionBy { get; set; }
        public DateTime ActionOn { get; set; }
    }
}
