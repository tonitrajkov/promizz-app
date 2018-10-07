using System;

namespace PromizzApp.Config.Helpers
{
    public class PromizzObjectNullException : Exception
    {
        public PromizzObjectNullException(string message) : base(message) { }

        public PromizzObjectNullException(string message, Exception inner) : base(message, inner) { }
    }

    public class PromizzObjectNotFoundException : Exception
    {
        public PromizzObjectNotFoundException(string message) : base(message) { }

        public PromizzObjectNotFoundException(string message, Exception inner) : base(message, inner) { }
    }

    public class PromizzOutOfRangeException : Exception
    {
        public PromizzOutOfRangeException(string message) : base(message) { }

        public PromizzOutOfRangeException(string message, Exception inner) : base(message, inner) { }
    }

    public class PromizzGeneralException : Exception
    {
        public PromizzGeneralException(string message) : base(message) { }

        public PromizzGeneralException(string message, Exception inner) : base(message, inner) { }
    }
}
