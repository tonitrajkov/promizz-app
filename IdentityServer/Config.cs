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
                    SubjectId = "1",
                    Username = "ironman",
                    Password = "test",
                    Claims = new List<Claim>
                    {
                        new Claim("given_name", "Iron"),
                        new Claim("family_name", "Man"),
                        new Claim("role", "Business"),
                        new Claim("user_name", "ironman")
                    }
                },
                new TestUser
                {
                    SubjectId = "2",
                    Username = "captianamerica",
                    Password = "test",
                    Claims = new List<Claim>
                    {
                        new Claim("given_name", "Captian"),
                        new Claim("family_name", "America"),
                        new Claim("role", "Paid"),
                        new Claim("user_name", "captianamerica")
                    }
                },
                new TestUser
                {
                    SubjectId = "3",
                    Username = "blackpanter",
                    Password = "test",
                    Claims = new List<Claim>
                    {
                        new Claim("given_name", "Black"),
                        new Claim("family_name", "Panter"),
                        new Claim("role", "Free"),
                        new Claim("user_name", "blackpanter")
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
               new IdentityResource("roles", "Your role(s)", new []{"role"}),
               new IdentityResource("usernames", "Your username", new []{"user_name"}),
            };
        }

        internal static IEnumerable<ApiResource> GetApiResources()
        {
            return new[] {
                new ApiResource("promizzappapi", "Promizz API", new[] { "role", "family_name", "family_name", "user_name" })
            };
        }

        public static List<Client> GetClients()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientName = "Promizz App",
                    ClientId="promizzappclient",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    RequireConsent = false,
                    AllowAccessTokensViaBrowser = true,
                    RedirectUris =new List<string>
                    {
                        "https://localhost:4300/signin-oidc",
                        "https://localhost:4300/redirect-silentrenew"
                    },
                    AccessTokenLifetime = 10000,
                    PostLogoutRedirectUris = new []
                    {
                        "https://localhost:4300/"
                    },
                    AllowedScopes = new []
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "roles",
                        "promizzappapi",
                        "usernames"
                    }
               }
            };
        }
    }
}