// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Threading;
using System.Threading.Tasks;
using RegioneLombardia.Models.Store;

namespace RegioneLombardia.Models.Interfaces
{
    public interface IApplicationDbContext : IDisposable
    {
        DbSet<Notice> Notices { get; set; }
        DbSet<Application> Applications { get; set; }
        DbSet<Attachment> Attachments { get; set; }
        Task<int> SaveChangesAsync(CancellationToken requestAborted);
        EntityEntry Entry(object entity);
    }
}