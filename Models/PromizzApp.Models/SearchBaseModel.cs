using System.Collections.Generic;

namespace PromizzApp.Models
{
    public class SearchBaseModel
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public int TotalElements { get; set; }
        public int TotalPages { get; set; }
        public string OrderBy { get; set; }
        public string OrderDir { get; set; }
        public string SearchText { get; set; }
    }

    public class SearchResult<T> where T : class
    {
        public IEnumerable<T> data;
    }
}
