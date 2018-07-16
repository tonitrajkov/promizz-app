using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Test;
using System.Collections.Generic;
using System.Security.Claims;

namespace IdentityServer
{
    public static class Config
    {
        public static List<TestUser> GetUsers()
        {
            return new List<TestUser>
            {
                new TestUser
                {
                    SubjectId = "fec0a4d6-5830-4eb8-8024-272bd5d6d2bb",
                    Username = "ironman",
                    Password = "test",
                    Claims = new List<Claim>
                    {
                        new Claim("given_name", "Iron"),
                        new Claim("family_name", "Man"),
                        new Claim("role", "Business"),
                    }
                },
                new TestUser
                {
                    SubjectId = "c3b7f625-c07f-4d7d-9be1-ddff8ff93b4d",
                    Username = "captianamerica",
                    Password = "test",
                    Claims = new List<Claim>
                    {
                        new Claim("given_name", "Captian"),
                        new Claim("family_name", "America"),
                        new Claim("role", "Paid"),
                    }
                },
                new TestUser
                {
                    SubjectId = "13bcf625-90cf-d74d-19be-aaccaff93b4d",
                    Username = "blackpanter",
                    Password = "test",
                    Claims = new List<Claim>
                    {
                        new Claim("given_name", "Black"),
                        new Claim("family_name", "Panter"),
                        new Claim("role", "Free"),
                    }
                }
            };
        }

        public static List<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
               new IdentityResources.OpenId(),
               new IdentityResources.Profile(),
               new IdentityResource("roles", "Your role(s)", new []{"role"})
            };
        }

        internal static IEnumerable<ApiResource> GetApiResources()
        {
            return new[] {
                new ApiResource("promizzapi", "Promizz API", new[] { "role" })
            };
        }

        public static List<Client> GetClients()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientName = "Promizz App",
                    ClientId="promizzclient",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    RequireConsent = false,
                    AllowAccessTokensViaBrowser = true,
                    RedirectUris =new List<string>
                    {
                        "https://localhost:4300/signin-oidc",
                        "https://localhost:4300/redirect-silentrenew"
                    },
                    AccessTokenLifetime = 180,
                    PostLogoutRedirectUris = new []
                    {
                        "https://localhost:4300/"
                    },
                    AllowedScopes = new []
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "roles",
                        "promizzapi",
                    }
               }
            };
        }
    }
}
//new Client
//{
//    ClientName = "promizzclient",
//    ClientId="promizzclient",
//    AccessTokenType = AccessTokenType.Reference,
//    AccessTokenLifetime = 330,// 330 seconds, default 60 minutes
//    IdentityTokenLifetime = 30,
//    AllowedGrantTypes = GrantTypes.Implicit,
//    AllowAccessTokensViaBrowser = true,
//    RedirectUris = new List<string>
//    {
//        "https://localhost:4300/",
//        "https://localhost:4300/redirect-silentrenew"

//    },
//    PostLogoutRedirectUris = new List<string>
//    {
//        "https://localhost:4300/"
//    },
//    AllowedCorsOrigins = new List<string>
//    {
//        "https://localhost:4300/"
//    },
//    AllowedScopes = new List<string>
//    {
//        IdentityServerConstants.StandardScopes.OpenId,
//        IdentityServerConstants.StandardScopes.Profile,
//        "roles",
//        "promizzapi"
//    }
//}