using System;
using System.Collections.Generic;
using System.Text;

namespace PromizzApp.Services.Interfaces
{
    public interface ILocalizationService
    {
        Dictionary<string, string> LoadLocalization(string language);
    }
}
