using System;
using System.Collections.Generic;
using System.Text;

namespace PromizzApp.Config
{
    public static class Utils
    {
        public static string GetFirstLettersFromStrings(string s1, string s2)
        {
            var letters = "";

            if (!string.IsNullOrEmpty(s1))
                letters = s1[0].ToString();


            if (!string.IsNullOrEmpty(s2))
                letters += s2[0].ToString();

            return letters;
        }
    }
}
